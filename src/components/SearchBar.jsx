import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, //uma string
      onSearchTextChange, // uma callback
      bookmarkedOnly, // um boolean
      onBookmarkedChange, // uma callback
      selectedGenre, // uma string
      onSelectedGenreChang, // uma callback
    } = this.props;
  
    return (
      <form data-testid="search-bar-form">
        êa
      </form>

    );
  }
}

export default SearchBar;
