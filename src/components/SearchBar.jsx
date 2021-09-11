import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="texto">
            Inclui o texto:
            <input
              type="text"
              name="inputText"
              id="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="inputCheckboxFavorites">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="inputCheckboxFavorites"
              id="inputCheckboxFavorites"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
};

export default SearchBar;
