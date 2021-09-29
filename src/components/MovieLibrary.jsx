// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
