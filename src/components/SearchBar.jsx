import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            htmlFor="input-text"
          >
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
