import React, { Component } from 'react';
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
    }
  }
  render() {
    return (
      <>
        <SearchBar searchText={''}/>
        <AddMovie />
        {console.log(this.props)}
      </>
    );
  }
}

export default MovieLibrary;