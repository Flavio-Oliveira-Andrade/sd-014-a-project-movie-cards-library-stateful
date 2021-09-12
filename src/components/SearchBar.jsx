import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import OptionGenre from './OptionGenre';
import Checked from './Checkbox';

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
      <form data-testid="search-bar-form" className="form">
        <TextInput value={searchText} onChange={onSearchTextChange} />
        <Checked checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <OptionGenre value={selectedGenre} onChange={onSelectedGenreChange} />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
