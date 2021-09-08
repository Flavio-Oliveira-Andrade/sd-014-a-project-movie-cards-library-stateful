import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            value={ searchText }
            type="text"
            name="text-input-label"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            type="checkbox"
            name="text-input-label"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-input-label" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            type="checkbox"
            name="select-input-label"
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
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: 'No text',
  // onSearchTextChange: PropTypes.func,
  // bookmarkedOnly: PropTypes.bool,
  // onBookmarkedChange: PropTypes.func,
  selectedGenre: 'No text',
  // onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
