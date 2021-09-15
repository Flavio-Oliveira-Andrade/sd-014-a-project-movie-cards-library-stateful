// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.state = this.initialState;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ movies }
        />
      </>
    );
  }
}

export default MovieLibrary;
