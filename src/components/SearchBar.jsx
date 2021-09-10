// implement SearchBar component here
import React from 'react';
import Proptypes from 'prop-types';

class SearchBar extends React.Component {
  handleChange(event) {
    this.setState({
      [event.target.name]:
      (event.target.type === 'checkbox' ? event.target.checked : event.target.value) });
  }

  inputs(type, datatestid, value, onchange) {
    return (
      <input
        type={ type }
        data-testid={ datatestid }
        value={ value }
        onChange={ onchange }
      />
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inputSearch" data-testid="text-input-label">
          Inclui o texto:
          { this.inputs('text', 'title-input', searchText, onSearchTextChange)}
        </label>
        <label htmlFor="inputCheckSearch" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="inputCheckSearch"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="selectSearch" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name=""
            id="selectSearch"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
