/* eslint-disable react/prop-types */
// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      bookMarkedOnly,
      selectedGenre,
      onBookmarkedChange,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto.
          <input
            type="text"
            id="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorites">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="favorites"
            checked={ bookMarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor={ genre }>
          Filtrar por gênero
          <select value={ selectedGenre } onChange={ onSelectedGenreChange }>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
