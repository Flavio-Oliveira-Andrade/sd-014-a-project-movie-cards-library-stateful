// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    // const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="texto" data-testid="text-input-label">
            Inclui o texto:
            <input type="text" value="searchText" id="texto" data-testid="text-input" />
          </label>

          <label htmlFor="checked" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input type="checked" id="checked" onChang="onBookmarkedChange" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
