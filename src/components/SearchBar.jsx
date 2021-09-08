import React, { Component } from "react";
import PropTypes from 'prop-types';
import MovieList from "./MovieList";

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSerarchTextChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search">
          <input value={ searchText }
            type="text"
            name="searchText"
            onChange={ this.handleChange } />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

SearchBar.prototypes = {
  searchText: PropTypes.string.isRequired,
  onSerarchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
