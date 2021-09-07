import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto
          <input
            onChange={ onSearchTextChange }
            type="text"
            id="search"
            name="search"
            value={ searchText }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="favorito" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            onChange={ onBookmarkedChange }
            type="checkbox"
            id="favorito"
            name="favorito"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="genero" data-testid="select-input-label">
          Filtrar por gênero
          <select
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            id="genero"
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
