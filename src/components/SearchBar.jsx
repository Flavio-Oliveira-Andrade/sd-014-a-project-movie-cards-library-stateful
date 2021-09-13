// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, // string
      onSearchTextChange, // callback
      bookmarkedOnly, // boolean
      onBookmarkedChange, // callback
      selectedGenre, // string
      onSelectedGenreChange, // callback
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <section>
            <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto</label>
            <input type="text" value={searchText} onChange={onSearchTextChange} data-testid="text-input"/>
          </section>
          <section>
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
            <input type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
          </section>
        </form>
        {searchText}
        {onSearchTextChange}
        {bookmarkedOnly}
        {onBookmarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
    )
  }
}

export default SearchBar;
