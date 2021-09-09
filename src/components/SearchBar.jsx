// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onChangeGeneric,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input
            name="searchText"
            id="searchText"
            onChange={ onChangeGeneric }
            value={ searchText }
            type="text"
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorito">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            id="favorito"
            onChange={ onChangeGeneric }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genre">
          Filtrar por gênero
          <select
            name="selectedGenre"
            onChange={ onChangeGeneric }
            value={ selectedGenre }
            id="genre"
            data-testid="select-input"
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
  searchText: PropTypes.string,
  onChangeGeneric: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
}.isRequired;

export default SearchBar;
