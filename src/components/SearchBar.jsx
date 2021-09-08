import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, // string
      onSearchTextChange, // callback
      bookmarkedOnly, // boolean
      onBookmarkedChange, // callback
      selectedGenre, // string
      onSelectedGenreChange, // callback
    } = this.props;

    return (
      <form data-testid="search-bar-form" />
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
