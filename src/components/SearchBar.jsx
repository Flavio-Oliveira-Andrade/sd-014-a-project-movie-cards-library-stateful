import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, // uma string
      onSearchTextChange, // uma callback
      bookmarkedOnly, // um boolean
      onBookmarkedChange, // uma callback
      selectedGenre, // uma string
      onSelectedGenreChange, // uma callback
    } = this.props;
    return (
      <section>
        <h1>Hello React!</h1>
        <p>{ searchText }</p>
        <p>{ onSearchTextChange }</p>
        <p>{ bookmarkedOnly }</p>
        <p>{ onBookmarkedChange }</p>
        <p>{ selectedGenre }</p>
        <p>{ onSelectedGenreChange }</p>
        <form data-testid="search-bar-form" />
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
