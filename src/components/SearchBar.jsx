// implement SearchBar component here
import React, { Component } from 'react';
import Proptypes from 'prop-types';

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
      </form>
    );
  }
}