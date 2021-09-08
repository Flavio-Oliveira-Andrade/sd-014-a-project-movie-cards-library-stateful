import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textLabel" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkboxLabel" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            checked={ this.props.bookmarkedOnly }
            onChange={ this.props.onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string,
  onSearchTextChange: propTypes.string,
  bookmarkedOnly: propTypes.bool,
  onBookmarkedChange: propTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: true,
  onBookmarkedChange: () => console.log('oi'),
};

export default SearchBar;
