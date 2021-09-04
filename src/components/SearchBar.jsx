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
          config={ ['text', 'text-input', 'text-input', searchText, null,
            onSearchTextChange, 'Inclui o texto:'] }
        />
        <InputGen
          config={ ['checkbox', 'checkbox-input', 'checkbox-input', null, bookmarkedOnly,
            onBookmarkedChange, 'Mostrar somente favoritos'] }
        />
        <label htmlFor="select-input" data-testid="select-input-label">
          <span>Filtrar por gênero</span>
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="select-input"
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
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
  bookmarkedOnly: false,
  onBookmarkedChange: null,
  selectedGenre: '',
  onSelectedGenreChange: null,
};

export default SearchBar;
