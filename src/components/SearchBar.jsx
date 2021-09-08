import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="search" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              name="search"
              id="search"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="bookmarked" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              name="bookmarked"
              id="bookmarked"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>

          <label htmlFor="filter-genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name=""
              id=""
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
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 08/09/2021
 */
