/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange
    } = this.props;
    return (
      <form
        data-testid="search-bar-form" // item 1
      >
        <label // item 2
          htmlFor="searchText"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label
          htmlFor="checkbox"
          data-testid="checkbox-input-label"
        >
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
