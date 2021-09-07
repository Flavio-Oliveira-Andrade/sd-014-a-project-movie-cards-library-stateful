import React from 'react';
import PropTypes from 'prop-types';
import { searchGenreTestIds, genres } from '../configData';

import SearchTextInput from './SearchTextInput';
import BookmarkInput from './BookmarkInput';
import GenreSelectInput from './GenreSelectInput';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      bookmarkedOnly } = this.props;

    return (
      <form data-testid="search-bar-form">
        <SearchTextInput value={ searchText } handler={ onSearchTextChange } />

        <BookmarkInput value={ bookmarkedOnly } handler={ onBookmarkedChange } />

        <GenreSelectInput
          value={ selectedGenre }
          handler={ onSelectedGenreChange }
          genreList={ genres }
          testIds={ searchGenreTestIds }
          title="Filtrar por gênero:"
          name="selectedGenre"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
};

SearchBar.defaultProps = {
  searchText: '',
  selectedGenre: '',
  onSearchTextChange: () => undefined,
  onBookmarkedChange: () => undefined,
  onSelectedGenreChange: () => undefined,
  bookmarkedOnly: false,
};

export default SearchBar;
