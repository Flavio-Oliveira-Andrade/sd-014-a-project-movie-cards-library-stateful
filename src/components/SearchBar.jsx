import React from 'react';

function SearchBar() {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenre,
  } = this.props;

  return (
    <form data-testid="search-bar-form">
      <label data-testid="text-input-label">
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
      <label data-testid="checkbox-input-label">
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
      <label data-testid="select-input-label">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenre }
          data-testid="select-input"
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

export default SearchBar;
