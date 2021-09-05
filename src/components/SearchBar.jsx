import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      bookmarkedOnly } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="searchText"
            value={ searchText }
            data-testid="text-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="bookmark" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            name="bookmark"
            id="bookmark"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="genderSelect" data-testid="select-input-label">
          Filtrar por gênero :
          <select
            name="genderSelect"
            id="genderSelect"
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
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
};

SearchBar.defaultProps = {
  searchText: '',
  selectedGenre: '',
  onSearchTextChange: () => undefined,
  onBookmarkedChange: () => undefined,
  onSelectedGenreChange: () => undefined,
  bookmarkedOnly: false,
};

export default SearchBar;
