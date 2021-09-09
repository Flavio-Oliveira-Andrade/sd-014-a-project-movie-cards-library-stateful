import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="input1"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
          <label
          htmlFor="input1"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="checkbox"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />

        </label>
        <p>oi</p>
      </form>
    );
  }
}

export default SearchBar;
