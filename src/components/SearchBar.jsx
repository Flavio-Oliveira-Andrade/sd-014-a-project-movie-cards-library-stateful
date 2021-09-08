import React from 'react';

function SearchBar() {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenre,
  } = this.props
  return (
    <form data-testid="search-bar-form">
      <label data-testid="text-input-label">
      <input type="text" data-testid="text-input" value={ searchText } onChange={ onSearchTextChange }></input>
      </label>
    </form>
  );
}

export default SearchBar;
