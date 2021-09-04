// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    //   1. Crie um componente chamado SearchBar
    const { onSelectedGenreChange, selectedGenre, onBookmarkedChange,
      bookmarkedOnly, onSearchTextChange, searchText } = this.props;
    return (<form data-testid="search-bar-form"> </form>);
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequerid;

export default SearchBar;
