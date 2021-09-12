import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <section>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="search" data-test-id="text-input-label">
            Inclui o texto
            <input
              type="text"
              name="search"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="favorite" data-testid="checkbox-input-label">
            <input
              type="checkbox"
              name="favorite"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
            Mostrar somente favoritos
          </label>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name="genre"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option" selected>Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
  bookmarkedOnly: false,
  onBookmarkedChange: null,
  selectedGenre: '',
  onSelectedGenreChange: null,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
