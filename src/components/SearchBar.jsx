// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText: s, onSearchTextChange: o, bookmarkedOnly } = this.props;

    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="i" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ s } onChange={ o } data-testid="text-input" id="i" />
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
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
