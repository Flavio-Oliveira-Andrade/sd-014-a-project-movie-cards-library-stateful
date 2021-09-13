import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PutInput from './PutInput';
import GenreComp from './GenreComp';

class SearchBar extends Component {
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
        <fieldset>
          <PutInput
            data="text"
            type="text"
            name="texto"
            value={ searchText }
            onChange={ onSearchTextChange }
            label="Inclui o texto:"
          />
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkBox"
              name="checkbox"
              id="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <GenreComp
            valor={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </fieldset>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};
export default SearchBar;
