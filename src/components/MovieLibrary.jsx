import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  updateSearchStates = ({ target }) => {
    const stateKeys = {
      text: 'searchText',
      checkbox: 'bookmarkedOnly',
      select: 'selectedGenre',
    };
    const key = stateKeys[target.name];
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [key]: value });
  }

  render() {
    const { movies, ...searchStates } = this.state;
    const searchHandlers = {
      onSearchTextChange: this.updateSearchStates,
      onBookmarkedChange: this.updateSearchStates,
      onSelectedGenreChange: this.updateSearchStates,
    };
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar { ...searchStates } { ...searchHandlers } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
