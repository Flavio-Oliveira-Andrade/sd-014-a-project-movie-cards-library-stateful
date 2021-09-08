// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label>
          Inclui o texto
          <input type="text" value="searchText" onChange="onSearchTextChange" />
        </label>
      </form>
    );
  }
}
export default SearchBar;
