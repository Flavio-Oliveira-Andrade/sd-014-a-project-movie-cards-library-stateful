// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText: s, onSearchTextChange: o, bookmarkedOnly: bO } = this.props;

    const { onBookmarkedChange: oBC, selectedGenre: sG } = this.props;

    const { onSelectedGenreChange: oSGC } = this.props;

    const dt = 'checkbox-input';
    const tc = 'checkbox';

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="i" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ s } onChange={ o } data-testid="text-input" id="i" />
        </label>
        <label htmlFor="ck" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type={ tc } id="ck" checked={ bO } onChange={ oBC } data-testid={ dt } />
        </label>
        <label htmlFor="sel" data-testid="select-input-label">
          Filtrar por gênero
          <select id="sel" value={ sG } onChange={ oSGC } data-testid="select-input">
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
