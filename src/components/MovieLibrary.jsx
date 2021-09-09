import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
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

  moviesFilter({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    const textFilterMovies = movies
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    const genreFilterMovies = textFilterMovies
      .filter((movie) => movie.genre.includes(selectedGenre));
    if (bookmarkedOnly === true) {
      return genreFilterMovies
        .filter((movie) => movie.bookmarked === true);
    } return genreFilterMovies;
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
        <MovieList movies={ this.moviesFilter(this.state) } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
