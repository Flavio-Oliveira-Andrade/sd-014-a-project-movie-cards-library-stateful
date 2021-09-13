/* eslint-disable jsx-a11y/label-has-associated-control */
// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { func } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = func;

    const { estados } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = estados;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputs">
          Inclui o texto:
          <input
            className="inputs"
            data-testid="text-input"
            name="searchText"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="inputs">
          Mostrar somente favoritos
          <input
            className="inputs"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="inputs">
          Filtrar por gênero
          <select
            className="inputs"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSelectedGenreChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;

export default SearchBar;
