import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInputS from './CheckboxInputS';
import GenreFilterS from './GenreFilterS';
import TextInputS from './TextInputS';

class SearchBar extends Component {
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
        <TextInputS value={ searchText } onChange={ onSearchTextChange } />
        <CheckboxInputS checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <GenreFilterS value={ selectedGenre } onChange={ onSelectedGenreChange } />
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
