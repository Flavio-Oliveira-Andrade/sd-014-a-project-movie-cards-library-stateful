import React from 'react';
import AddMovie from './AddMovie';
// import PropTypes from 'prop-types';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <AddMovie />
      </>
    );
  }
}

export default MovieLibrary;
