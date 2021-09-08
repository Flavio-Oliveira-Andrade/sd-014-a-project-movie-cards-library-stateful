import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
      />
    );
  }
}

export default MovieLibrary;
