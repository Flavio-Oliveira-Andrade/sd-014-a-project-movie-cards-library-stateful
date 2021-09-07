// implement SearchBar component here
import React, { Component } from 'react';

class searchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default searchBar;
