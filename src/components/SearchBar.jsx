// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { listagem } = this.props;

    return (
      <form data-testid="search-bar-form">
        teste
        { listagem }
      </form>
    );
  }
}

SearchBar.propTypes = {
  listagem: PropTypes.arrayOf({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
