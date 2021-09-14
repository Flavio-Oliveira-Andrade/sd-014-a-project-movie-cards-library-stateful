import React, { Component } from 'react';
import Option from '../sub-components/Option';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              id="search"
              type="text"
              name="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <div>
            <label htmlFor="favorite" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                id="favorite"
                type="checkbox"
                name="bookmarkedOnly"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
              />
            </label>
          </div>
          <Option
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
