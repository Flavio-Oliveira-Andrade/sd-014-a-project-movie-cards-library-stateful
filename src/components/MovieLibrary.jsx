import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Customized imports */
import MovieList from './MovieList';
import SearchBar from './SearchBar';

import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  render() {
    const { movies } = this.props;

    return (
      <main>
        <SearchBar { ...this.state } />
        <MovieList movies={ movies } />
        <AddMovie />
      </main>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: [],
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
