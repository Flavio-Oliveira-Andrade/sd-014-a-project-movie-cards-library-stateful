// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <main>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input type="text" name="searchText" id="searchText" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
          </label>
        </form>
      </main>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired, // strin
  onSearchTextChange: PropTypes.func.isRequired, // callback
  bookmarkedOnly: PropTypes.bool.isRequired, // boollean
  onBookmarkedChange: PropTypes.func.isRequired, // callback
  selectedGenre: PropTypes.string.isRequired, // string
  onselectionchange: PropTypes.func.isRequired, // callback
};

export default SearchBar;
