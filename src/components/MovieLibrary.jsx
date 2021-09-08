import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  newMovie(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const textFilterMovies = movies
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    const genreFilterMovies = textFilterMovies
      .filter((movie) => movie.genre.includes(selectedGenre));
    let bookmarkedFilterMovies = [];
    if (bookmarkedOnly === true) {
      bookmarkedFilterMovies = genreFilterMovies
        .filter((movie) => movie.bookmarked === true);
    } else { bookmarkedFilterMovies = genreFilterMovies; }
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ bookmarkedFilterMovies } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default MovieLibrary;
