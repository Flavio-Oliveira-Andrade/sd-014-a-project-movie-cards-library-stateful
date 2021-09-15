import React from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        {/* <MovieList /> */}
        <AddMovie />
      </main>
    );
  }
}

export default MovieLibrary;
