import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   searchText: '',

  //   // };
  // }

  render() {
    const {
      searchText, bookmarkedOnly, selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="incluiTexto"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="favorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default SearchBar;
