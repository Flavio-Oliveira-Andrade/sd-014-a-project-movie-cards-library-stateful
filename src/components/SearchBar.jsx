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

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          { this.textInput() }
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.string,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: PropTypes.string,
};

export default SearchBar;
