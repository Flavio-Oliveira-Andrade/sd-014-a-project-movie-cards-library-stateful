import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
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
      <div>
        <form data-testid="search-bar-form" action="">
          <label data-testid="text-input-label" htmlFor="text">
            Inclui o texto:
            <input
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
              id="text"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="favorite">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              id="favorite"
            />
          </label>
          <label data-testid="select-input-label" htmlFor="select">
            Filtrar por gênero
            <select
              data-testid="select-input"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              id="select"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
