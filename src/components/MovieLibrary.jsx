import React, { Component } from 'react';

/** Customized imports */
import MovieList from './MovieList';
import SearchBar from './SearchBar';

/** Data */
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.setState = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <main>
        <SearchBar searchText={ searchText } />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

export default MovieLibrary;
