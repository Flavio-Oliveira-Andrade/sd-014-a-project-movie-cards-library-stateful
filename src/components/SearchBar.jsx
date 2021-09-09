// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.props = {
      searchText: '',
      onSearchTextChange: (event) => this.setState({
        [event.target.name]: event.target.value,
      }),
      bookmarkedOnly: false,
      onBookmarkedChange: () => this.setState(() => {
        const { bookmarkedOnly } = this.state;
        if (bookmarkedOnly === false) {
          return { bookmarkedOnly: true };
        }
        return { bookmarkedOnly: false };
      }),
      selectedGenre: '',
      onSelectedGenreChange: () => {},
    };
  }

  render() {
    const {
      onSelectedGenreChange,
      onBookmarkedChange,
      onSearchTextChange,
      selectedGenre,
      searchText,
      bookmarkedOnly } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputs">
          Inclui o texto:
          <input
            className="inputs"
            data-testid="text-input"
            name="searchText"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="inputs">
          Mostrar somente favoritos
          <input
            className="inputs"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="seletor">
          Filtrar por gênero
          <select
            data-testid="select-input"
            className="seletor"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
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
