// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  textInput() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto:
        <input
          name={ searchText }
          onChange={ onSearchTextChange }
          value={ searchText }
          type="text"
          id="searchText"
          data-testid="text-input"
        />

      </label>
    );
  }

  checkboxInput() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="favorites">
        Mostrar somente favoritos
        <input
          name="favorites"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
          type="checkbox"
          id="favorites"
          data-testid="checkbox-input"
        />

      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          { this.textInput() }
          { this.checkboxInput() }
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  // selectedGenre: PropTypes.string,
  // onSelectedGenreChange: PropTypes.func,

};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: false,
  // selectedGenre: '',
  // onSelectedGenreChange: '',
};

export default SearchBar;
