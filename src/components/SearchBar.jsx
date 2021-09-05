// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value
    });
  }

  render() {


    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">Inclui o texto:
          <input value={ searchText } onChange={this.onSearchTextChange} data-testid="text-input" type="text" name="searchText" id="searchText" />
        </label><br />
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">Mostrar somente favoritos
          <input value={ bookmarkedOnly } onChange={this.onBookmarkedChange} data-testid="checkbox-input" type="checkbox" name="bookmarkedOnly" id="bookmarkedOnly" />
        </label><br />
        <label data-testid="select-input-label" htmlFor="selectedGenre">Filtrar por gênero
          <select value={ selectedGenre } onChange={this.onSelectedGenreChange} data-testid="select-input" name="selectedGenre" id="selectedGenre">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;