import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.handleMoviesFilter = this.handleMoviesFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
  }

  handleMoviesFilter(arr) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    let resultArr = [...arr];
    if (searchText) {
      resultArr = arr.filter(
        (movie) => movie.title.toLowerCase().includes(searchText)
          || movie.subtitle.toLowerCase().includes(searchText)
          || movie.storyline.toLowerCase().includes(searchText),
      );
    }
    if (selectedGenre) {
      resultArr = arr.filter((movie) => movie.genre.includes(selectedGenre));
    }
    if (bookmarkedOnly) {
      resultArr = arr.filter((movie) => movie.bookmarked === true);
    }
    return resultArr;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleNewMovie(obj) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, obj],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={ this.handleMoviesFilter(movies) } />
        <AddMovie onClick={ this.handleNewMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
