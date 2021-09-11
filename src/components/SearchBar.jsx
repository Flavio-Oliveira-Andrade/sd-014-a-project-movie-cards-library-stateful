import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',

    }
  }

  render() {
    const { movies } = this.props;
    const { searchText, onSearchTextChange } = this.props;
    
    return (
      <form data-testid="search-bar-form">
      <label 
      htmlFor='incluiTexto'
      data-testid="text-input-label">
        Inclui o texto:
        <input 
        data-testid="text-input"
        value={ searchText }
        onChange={ onSearchTextChange }>
        </input>
      </label>

      </form>
    );
  }
}

export default SearchBar;


