import React from 'react';

class SearchBar extends React.Component {

  render() {
    const { onSearchTextChange, searchText} = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="labelTexto" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            id="labelTexto"
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
