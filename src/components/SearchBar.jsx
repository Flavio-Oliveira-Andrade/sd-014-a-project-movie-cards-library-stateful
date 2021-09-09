import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import opt from '../Options';

export default class SearchBar extends Component {
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
      <form data-testid="search-bar-form" className="search-bar">
        <label htmlFor="searchInput" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            id="searchInput"
            onChange={ onSearchTextChange }
            type="text"
            value={ searchText }
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="bookmarkedCheckbox"
          onChange={ onBookmarkedChange }
        >
          <input
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            id="bookmarkedCheckbox"
            type="checkbox"
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            {opt.map(({ name, value }) => (
              <Option key={ name } name={ name } value={ value } />
            ))}
          </select>
        </label>
      </form>
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
