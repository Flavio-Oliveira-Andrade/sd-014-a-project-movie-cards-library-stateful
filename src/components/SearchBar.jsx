import React from 'react';

class SearchBar extends React.Component {
  render() {
    // searchText, uma string
    // onSearchTextChange, uma callback
    // bookmarkedOnly, um boolean
    // onBookmarkedChange, uma callback
    // selectedGenre, uma string
    // onSelectedGenreChange, uma callback
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return(
      <form data-testid="search-bar-form">
       
      </form>
    );
  }
}

export default SearchBar;