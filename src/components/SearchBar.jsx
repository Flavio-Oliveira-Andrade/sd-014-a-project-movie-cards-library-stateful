// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

function func() {
  return (func);
}

class SearchBar extends React.Component {
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
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            name="searchText"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            name="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero:
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="selectedGenre"
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
  searchText: 'Oi',
  onSearchTextChange: func(),
  bookmarkedOnly: true,
  onBookmarkedChange: func(),
  selectedGenre: 'action',
  onSelectedGenreChange: func(),
};

export default SearchBar;
