import React, { Component } from 'react';

/** Customized imports */
import MovieList from './MovieList';
import SearchBar from './SearchBar';

/** Data */
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    return (
      <main>
        <SearchBar { ...this.state } />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

export default MovieLibrary;
