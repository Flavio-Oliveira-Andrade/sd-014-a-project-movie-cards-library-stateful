// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            name="searchText"
            type="text"
            id="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        Mostrar somente favoritos

        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          <input
            name="bookmarkedOnly"
            type="checkbox"
            id="bookmarkedOnly"
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
