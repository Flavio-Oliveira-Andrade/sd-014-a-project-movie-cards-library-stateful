import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, // uma string
      onSearchTextChange, // uma callback
      bookmarkedOnly, // um boolean
      onBookmarkedChange, // uma callback
      selectedGenre, // uma string
      onSelectedGenreChange, // uma callback
    } = this.props;
    return (
      <section>
        <h1>Hello React!</h1>
        <p>{ onBookmarkedChange }</p>
        <p>{ selectedGenre }</p>
        <p>{ onSelectedGenreChange }</p>
        <form data-testid="search-bar-form">
          <label
            id="text-input-label"
            data-testid="text-input-label"
            htmlFor="text-input"
          >
            Inclui o texto:
            <input
              id="text-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label
            id="checkbox-input-label"
            data-testid="checkbox-input-label"
            htmlFor="checkbox-input"
          >
            <input
              id="checkbox-input"
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
            Mostrar somente favoritos
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
