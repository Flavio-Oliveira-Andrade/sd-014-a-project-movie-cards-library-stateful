// implement SearchBar component here
import React from 'react';

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
        <label data-testid="text-input-label" htmlFor="texto">
          Inclui o texto
          <input
            type="text"
            name="texto"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
          <input
            type="checkbox"
            name=""
            id=""
          />
        </label>
      </form>);
  }
}

export default SearchBar;
