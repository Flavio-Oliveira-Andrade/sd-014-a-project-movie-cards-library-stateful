import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form className="searchForm" data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input
              name="search"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>

          <label htmlFor="bookmark" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              name="bookmark"
              type="checkbox"
              checked="bookmarkedOnly"
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>

          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
