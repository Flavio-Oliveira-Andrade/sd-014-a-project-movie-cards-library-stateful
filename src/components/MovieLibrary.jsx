import React from "react";
import MovieList from './MovieList';
import SearchBar from "./SearchBar";
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    return(
      <SearchBar />
    );
  }
}



export default MovieLibrary;