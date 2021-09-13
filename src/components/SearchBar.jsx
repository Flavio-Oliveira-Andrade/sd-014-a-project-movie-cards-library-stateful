import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

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
      <div>
        {searchText}
        {onSearchTextChange}
        {bookmarkedOnly}
        {onBookmarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
        <Form searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
      </div>
    );
  }
}

// Referência: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
