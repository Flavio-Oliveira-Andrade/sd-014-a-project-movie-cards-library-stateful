// implement SearchBar component here
import React, { Component } from 'react';
// import Proptypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <input
          type="text"
          data-testid="text-input-label"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            id="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label
          htmlFor="select-input-label"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            name="select-input-label"
            id="select-input-label"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
