import React from 'react';
import PropTypes from 'prop-types';
import SearchTextInput from './SearchTextInput';
import BookmarkInput from './BookmarkInput';
import GenderSelectInput from './GenderSelectInput';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      bookmarkedOnly } = this.props;

    return (
      <form data-testid="search-bar-form">
        <SearchTextInput value={ searchText } handler={ onSearchTextChange } />

        <BookmarkInput value={ bookmarkedOnly } handler={ onBookmarkedChange } />

        <GenderSelectInput value={ selectedGenre } handler={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
};

SearchBar.defaultProps = {
  searchText: '',
  selectedGenre: '',
  onSearchTextChange: () => undefined,
  onBookmarkedChange: () => undefined,
  onSelectedGenreChange: () => undefined,
  bookmarkedOnly: false,
};

export default SearchBar;
