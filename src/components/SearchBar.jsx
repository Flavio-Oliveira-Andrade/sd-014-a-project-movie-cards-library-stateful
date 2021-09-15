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
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="pesquisa" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            data-testid="text-input"
            name="searchText"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="check" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="filtro" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            data-testid="select-input"
            name="selectedGenre"
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
  bookmarkedOnly: '',
  onBookmarkedChange: null,
  selectedGenre: '',
  onSelectedGenreChange: null,
};

export default SearchBar;
