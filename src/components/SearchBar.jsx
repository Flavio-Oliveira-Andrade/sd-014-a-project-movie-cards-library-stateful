import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="pesquisa" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            id="pesquisa"
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="check" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            id="check"
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
  bookmarkedOnly: '',
  onBookmarkedChange: null,
};

export default SearchBar;
