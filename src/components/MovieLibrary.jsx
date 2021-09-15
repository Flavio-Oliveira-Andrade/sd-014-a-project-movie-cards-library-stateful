import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </main>
    );
  }
}

export default MovieLibrary;
