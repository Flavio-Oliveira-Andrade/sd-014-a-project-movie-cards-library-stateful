import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={searchText}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
