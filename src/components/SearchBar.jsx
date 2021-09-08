import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { props: { searchText, onSearchTextChange } } = this;
    
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="includes-text" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
