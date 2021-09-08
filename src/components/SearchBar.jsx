// implement SearchBar component here

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <input type="text" />
    );
  }
}

SearchBar.propTypes = {
	searchText: PropTypes.string,
	onSearchTextChange: PropTypes.func,
	bookmarkedOnly: PropTypes.bool,
	onBookmarkedChange: PropTypes.func,
	selectedGenre: PropTypes.string,
	onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
