// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGen from './InputGen';

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
      <form action="" data-testid="search-bar-form">
        <InputGen
          config={ ['text', 'searchText', 'text-input', searchText, false,
            onSearchTextChange, 'Inclui o texto:'] }
        />
        <InputGen
          config={ ['checkbox', 'bookmarkedOnly', 'checkbox-input', false, bookmarkedOnly,
            onBookmarkedChange, 'Mostrar somente favoritos'] }
        />
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: false,
  bookmarkedOnly: false,
  onBookmarkedChange: false,
  selectedGenre: '',
  onSelectedGenreChange: false,
};

export default SearchBar;
