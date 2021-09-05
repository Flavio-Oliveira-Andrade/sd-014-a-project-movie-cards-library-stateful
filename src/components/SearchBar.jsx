// implement SearchBar component here
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
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">Inclui o texto
          <input
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input" type="text"
            name="searchText"
            id="searchText" />
        </label><br />
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">Mostrar somente favoritos
          <input
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly" />
        </label><br />
        <label data-testid="select-input-label" htmlFor="selectedGenre">Filtrar por gênero
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
            name="selectedGenre"
            id="selectedGenre">
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;