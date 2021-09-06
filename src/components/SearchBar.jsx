// implement SearchBar component here
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
        <div className="d-flex">
          <label htmlFor="text-input-label" data-testid="text-input-label">
            Inclui o texto
            <input
              id="text-input-label"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"

            />
          </label>
        </div>
        <div className="d-flex">
          <label
            htmlFor="text-input-label"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="text-input-label"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
        </div>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SearchBar;
