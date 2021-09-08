import React, { Component } from 'react';

/** Customized imports */
import MovieList from './MovieList';
import SearchBar from './SearchBar';

/** Data */
import movies from '../data';

class MovieLibrary extends Component {
  render() {
    return (
      <main>
        <SearchBar />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

export default MovieLibrary;
