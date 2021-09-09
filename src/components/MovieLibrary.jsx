import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  addMovie = (movie) => {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  moviesFilter = ({ movies, searchText, bookmarkedOnly, selectedGenre }) => {
    let moviesFiltered = movies.filter((movie) => {
      const title = movie.title.toLowerCase().includes(searchText);
      const subtitle = movie.subtitle.toLowerCase().includes(searchText);
      const storyline = movie.storyline.toLowerCase().includes(searchText);
      return title || subtitle || storyline;
    })
      .filter((movie) => movie.genre.includes(selectedGenre));
    if (bookmarkedOnly) {
      moviesFiltered = moviesFiltered.filter((movie) => movie.bookmarked === true);
    }
    return moviesFiltered;
  }

  handleChange = ({ target }) => {
    const { name, type, value, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilter(this.state) } />
        <AddMovie onClick={ this.addMovie } />
        {/* this.addMovie(this.state) */}
      </main>
    );
  }
}

export default MovieLibrary;
