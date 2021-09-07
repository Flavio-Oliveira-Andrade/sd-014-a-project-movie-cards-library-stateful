import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {
      onSearchTextChange,
      searchText,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="labelTexto" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            id="labelTexto"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-Favorito" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            id="checkbox-Favorito"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
