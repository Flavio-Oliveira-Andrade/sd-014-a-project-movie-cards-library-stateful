// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onBookmarkedChange,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto.
          <input
            type="text"
            id="text"
            className="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorites">
          <input
            type="checkbox"
            id="favorites"
            className="favorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" htmlFor="genre">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            className="genre"
            id="genre"
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
  onSearchTextChange: PropTypes.func,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.boolean,
  selectedGenre: PropTypes.string,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
