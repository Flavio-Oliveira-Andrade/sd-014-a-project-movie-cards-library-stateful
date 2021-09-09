import React from 'react';
import Bar from './Bar';
import Checkbox from './Checkbox';
import Select from './Select';

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
        <Bar onSearchTextChange={ onSearchTextChange } searchText={ searchText } />
        <Checkbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <Select
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

export default SearchBar;
