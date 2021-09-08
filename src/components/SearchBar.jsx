import React from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'stack-utils';

class SearchBar extends React.Component {
  render() {
    return (
      ''
    );
  }
}

SearchBar.propTypes = {
  prop: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
