import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-bar-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="search-bar-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="search-bar-bookmarked" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="search-bar-bookmarked"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="search-bar-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            id="search-bar-genre"
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
