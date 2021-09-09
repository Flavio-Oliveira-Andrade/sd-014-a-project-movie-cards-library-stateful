// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

// Requisito 1
class SearchBar extends React.Component {
  render() {
    // Referência: Desestruturação associando a props aula 11.2 com professora Maitê
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      // Requisito 2
      <form data-testid="search-bar-form">
        {/* Requisito 3 */}
        <label data-testid="text-input-label" htmlFor="search">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        {/* Requisito 4 */}
        <label data-testid="checkbox-input-label" htmlFor="bookmarked">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            type="checkbox"
          />
        </label>
        {/* Requisito 5 */}
        <label data-testid="select-input-label" htmlFor="selectGenre">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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

// Especificação dos tipos de props
SearchBar.propTypes = ({
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
