// implement SearchBar component here
import React, { useCallback } from 'react';

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
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkBox"
            checked ={ bookmarkedOnly }
            onChange ={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>



      </form>
    )
  }
}

export default SearchBar;
