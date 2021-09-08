import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchtext,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="searchText"
            name="searchText"
            data-testid="text-input"
            value={ searchtext }
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="bookmarkedOnly"
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
