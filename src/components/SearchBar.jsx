import React from 'react';

class SearchBar extends React.Component {
  render() {
    // searchText, uma string
    // onSearchTextChange, uma callback
    // bookmarkedOnly, um boolean
    // onBookmarkedChange, uma callback
    // selectedGenre, uma string
    // onSelectedGenreChange, uma callback
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return(
      <form data-testid="search-bar-form">
        <label htmlFor="inclText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="inclText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="favorito">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="favorito"
            data-testid="checkbox-input-label"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;