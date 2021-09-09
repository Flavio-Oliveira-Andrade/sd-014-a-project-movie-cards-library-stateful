import React, { Component } from 'react';
import './style/components.css';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <h1>{searchText}</h1>
        <h2>{selectedGenre}</h2>
        <h2>{onSearchTextChange}</h2>
        <h2>{bookmarkedOnly}</h2>
        <h2>{onBookmarkedChange}</h2>
        <h2>{onSelectedGenreChange}</h2>
      </form>
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
