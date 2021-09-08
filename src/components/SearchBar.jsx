import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              name="search"
              id="search"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 08/09/2021
 */
