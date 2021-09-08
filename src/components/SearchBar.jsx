import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        {/* <input type="submit" value="Enviar" /> */}
      </form>
    );
  }
}

export default SearchBar;
