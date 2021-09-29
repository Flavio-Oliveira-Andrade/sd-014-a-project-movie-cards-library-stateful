import React, { Component } from "react";
import PropTypes from 'prop-types';
// implement SearchBar component here


class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookedmarkedOnly,
      selectedGenre,
      onSelectedGenre
    } = this.props;

    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        
      </form>
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
}.isRequired;

export default SearchBar;
