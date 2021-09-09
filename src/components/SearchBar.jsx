import React from 'react';
import propTypes from 'prop-types';

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
    // referência para as tags: https://pt-br.reactjs.org/docs/forms.html
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textLabel" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkboxLabel" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="selectLabel" data-testid="select-input-label">
          Filtrar por gênero:
          <select
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
  searchText: propTypes.string,
  onSearchTextChange: propTypes.func,
  bookmarkedOnly: propTypes.bool,
  onBookmarkedChange: propTypes.func,
  selectedGenre: propTypes.string,
  onSelectedGenreChange: propTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => console.log('oi'),
  bookmarkedOnly: false,
  onBookmarkedChange: () => console.log('oi'),
  selectedGenre: '',
  onSelectedGenreChange: () => console.log('oi'),
};

export default SearchBar;
