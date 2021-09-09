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
        <h1>{searchText}</h1>
        <h1>{onSearchTextChange}</h1>
        <h1>{bookmarkedOnly}</h1>
        <h1>{onBookmarkedChange}</h1>
        <h1>{selectedGenre}</h1>
        <h1>{onSelectedGenreChange}</h1>
      </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: '',
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
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
