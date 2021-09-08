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

        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            name="searchText"
            type="text"
            id="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        Mostrar somente favoritos

        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          <input
            name="bookmarkedOnly"
            type="checkbox"
            id="bookmarkedOnly"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            id="selectedGenre"
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

// SearchBar.propTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: PropTypes.func,
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.func,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.func,
// };

export default SearchBar;
