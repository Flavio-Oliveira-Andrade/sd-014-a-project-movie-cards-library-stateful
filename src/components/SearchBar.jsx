// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { listagem } = this.props;
    return (
      <section>
        { listagem}
      </section>);
  }
}

SearchBar.propTypes = {
  listagem: PropTypes.arrayOf({
    searchText: PropTypes.string,
    //   onSearchTextChange: PropTypes.
    bookmarkedOnly: PropTypes.bool,
    //   onBookmarkedChange: PropTypes.
    selectedGenre: PropTypes.string,
    //  onSelectedGenreChange: PropTypes.
  }).isRequired,
};

export default SearchBar;
