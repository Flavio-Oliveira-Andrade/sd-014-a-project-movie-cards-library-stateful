// implement MovieLibrary component here
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick = (movie) => {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  moviesFilter = ({ searchText, selectedGenre, bookmarkedOnly, movies }) => movies
    .filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilter(this.state) } />
        ;
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
