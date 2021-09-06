import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies
    }
  }
  render() {
    return (
      <main>
        <SearchBar />
      </main>
    )
  }
}
