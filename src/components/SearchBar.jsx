import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="input1"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          htmlFor="input1"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            value={ searchText }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked="bookmarkedOnly"
          />

        </label>
        <p>oi</p>
      </form>
    );
  }
}

export default SearchBar;
