import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label
            htmlFor="texto"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label
            htmlFor="checkbox"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              type="checkBox"
              name="checkbox"
              id="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label
            htmlFor="genero"
            data-testid="select-input-label"
          >
            Filtrar por gênero
            <select
              name="genero"
              id="genero"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
            >
              <option
                value=""
                data-testid="select-option"
              >
                Todos
              </option>
              <option
                value="action"
                data-testid="select-option"
              >
                Ação
              </option>
              <option
                value="comedy"
                data-testid="select-option"
              >
                Comédia
              </option>
              <option
                value="thriller"
                data-testid="select-option"
              >
                Suspense
              </option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};
export default SearchBar;
