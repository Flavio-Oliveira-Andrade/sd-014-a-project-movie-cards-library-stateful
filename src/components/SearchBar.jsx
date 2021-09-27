import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="text-input-label"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            id="text-input-label"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }

          />
        </label>
        <label
          htmlFor="checkbox-input-label"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="checkbox-input-label"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookMarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
