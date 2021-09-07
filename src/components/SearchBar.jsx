// implement SearchBar component here
import React from "react";

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
            onChange="onSearchTextChange"
            value="searchText"
            type="text"
          />
        </label>
        <label htmlFor="">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input-label"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label data-testid="select-input-label" htmlFor="">
          Filtrar por gênero
          <select
            data-testid="select-input"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
            name=""
            id=""
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
