// implement MovieLibrary component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <main>
        <input type="text" name={ searchText } id="" />
        <input type="text" name={ bookmarkedOnly } id="" />
        <input type="text" name={ selectedGenre } id="" />
        <input type="text" name={ movies } id="" />
        <SearchBar />
        <AddMovie />
      </main>
    );
  }
}

export default MovieLibrary;
