import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    this.setState(({ movies }) => ({
      movies: [...movies, event],
    }));
  }

  movieListfilter({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    const filterMovie = movies.filter((movie) => {
      const titleMovie = movie.title.includes(searchText);
      const subtitleMovie = movie.subtitle.includes(searchText);
      const storylineMovie = movie.storyline.includes(searchText);
      return titleMovie || subtitleMovie || storylineMovie;
    });
    if (bookmarkedOnly) return filterMovie.filter((movie) => movie.bookmarked);
    if (selectedGenre) {
      return filterMovie.filter((movie) => movie.genre === selectedGenre);
    }
    return filterMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.movieListfilter(this.state) } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
