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
        <label htmlFor="search-bar-text" data-testid="text-input-label">
          Inclui o Texto:
          <input
            type="text"
            name="searchText"
            id="search-bar-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
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
