// implement SearchBar component here
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <input
          type="text"
          data-testid="text-input-label"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
      </form>
    );
  }
}