import React, { Component } from 'react';
import TextInput from './TextInput';

class SearchBar extends Component {
  render() {
    const {
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <TextInput id="text" onChange={ onSearchTextChange } value={ searchText }>
          Inclui o texto:
        </TextInput>
        <label data-testid="checkbox-input-label" htmlFor="checkboxInput">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="checkboxInput"
            name="checkboxInput"
            onChange={ onBookmarkedChange }
            type="checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectInput">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="selectInput"
            name="selectInput"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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
