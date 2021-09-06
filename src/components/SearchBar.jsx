/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import SearchFormInputText from './SearchFormInputText';
import SearchFormInputCheckbox from './SearchFormInputCheckbox';
import SearchFormSelect from './SearchFormSelect';

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
        <form data-testid="search-bar-form">
          <SearchFormInputText
            value={ searchText }
            eventListener={ onSearchTextChange }
          />
          <SearchFormInputCheckbox
            value={ bookmarkedOnly }
            eventListener={ onBookmarkedChange }
          />
          <SearchFormSelect
            value={ selectedGenre }
            eventListener={ onSelectedGenreChange }
          />
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
