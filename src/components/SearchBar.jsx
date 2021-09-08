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
        <label htmlFor="includes-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="includes-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="show-favorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name=""
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            id="show-favorites"
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-gender" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name=""
            id="select-genre"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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
}

export default SearchBar;
