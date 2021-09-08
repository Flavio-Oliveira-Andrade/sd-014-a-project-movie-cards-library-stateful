import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inclText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="inclText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="favorito" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="favorito"
            data-testid="checkbox-input-label"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="filtrar-genero" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="filtrar-genero"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
