import React from 'react';
import PropTypes from 'prop-types';

// Meus Imports:
import SearchBarInput from './SearchBarInput';
import SearchBarCheck from './SearchBarCheck';
import SearchBarSelect from './SearchBarSelect';

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
        <SearchBarInput value={ searchText } callbackFunc={ onSearchTextChange } />
        <SearchBarCheck checked={ bookmarkedOnly } callbackFunc={ onBookmarkedChange } />
        <SearchBarSelect value={ selectedGenre } callbackFunc={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => (undefined),
  bookmarkedOnly: false,
  onBookmarkedChange: () => (undefined),
  selectedGenre: '',
  onSelectedGenreChange: () => (undefined),
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
