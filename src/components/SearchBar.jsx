import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">

        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchText"
            name="searchText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="searchText" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>

    );
  }
}
SearchBar.protoTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
export default SearchBar;
