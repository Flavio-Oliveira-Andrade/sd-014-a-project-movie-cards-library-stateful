import React from 'react';
import { string } from 'yargs';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="select"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
          <label htmlFor="text" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <checkbox
              type="submit"
              data-testid="checkbox-input"
              id="checkbox-input"
              value={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

// SearchBar.propyTypes = {
//   this.props: (PropyTypes.shape({
//     searchText: PropTypes.string,
//     onSearchTextChange: PropTypes.callback,
//     bookmarkedOnly: PropTypes.boolean,
//     onBookmarkedChange: PropTypes.callback,
//     selectedGenre: PropTypes.string,
//     onSelectedGenreChange: PropTypes.callback,
//   })).isRequired,
// };

export default SearchBar;
