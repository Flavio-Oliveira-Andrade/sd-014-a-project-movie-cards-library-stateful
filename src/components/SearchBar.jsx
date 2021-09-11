// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange,
      bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="inclui-texto" data-testid="text-input-label">
            Inclui o texto
            <input
              id="inclui-texto"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>

          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="checkbox"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>

          <label data-testid="select-input-label" htmlFor="selectedGenre">
            Filtrar por gênero
            <select
              name=""
              id="selectedGenre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
            >
              <option data-testid="select-option" value="">  Todos</option>
              <option data-testid="select-option" value="action">  Ação</option>
              <option data-testid="select-option" value="comedy">  Comédia</option>
              <option data-testid="select-option" value="thriller">  Suspense</option>
            </select>
          </label>
        </form>
      </section>
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
