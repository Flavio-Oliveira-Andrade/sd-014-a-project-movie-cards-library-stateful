import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <input type="checkbox" />
      </form>
    );
  }
}

export default SearchBar;