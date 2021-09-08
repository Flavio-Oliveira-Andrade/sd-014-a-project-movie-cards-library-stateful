import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
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
          <label htmlFor="bookmarked" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input data-testid="checkbox-input" type="checkbox" name="bookmarked" id="bookmarked" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.string,
};

export default SearchBar;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 08/09/2021
 */
