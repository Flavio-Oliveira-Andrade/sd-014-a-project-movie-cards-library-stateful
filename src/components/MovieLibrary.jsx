import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
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
    this.addMovie = this.addMovie.bind(this);
    this.filter = this.filter.bind(this);
  }

  /* handleChange({ target: { name, type, checked, value } }) {
    const input = type === 'checkbox' ? checked : value;
    this.setState({ [name]: input });
  } */

  handleChange({ target }) {
    const { name } = target;
    const inputType = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({
      [name]: inputType,
    });
  }

  filter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    const filterMovies = movies.filter((movie) => {
      const title = movie.title.includes(searchText);
      const subtitle = movie.subtitle.includes(searchText);
      const storyline = movie.storyline.includes(searchText);
      return title || subtitle || storyline;
    });
    if (selectedGenre) {
      return filterMovies.filter((movie) => movie.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return filterMovies.filter((movie) => movie.bookmarked);
    }
    return filterMovies;
  }

  addMovie(newMovie) {
    this.setState((state) => ({
      movies: [...state.movies, { ...newMovie, bookmarked: true }],
    }));
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
        <MovieList movies={ this.filter(this.state) } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};
