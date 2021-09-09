import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <CustomInput
          name="text-input"
          type="text"
          labelText="Inclui o texto:"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <CustomInput
          name="checkbox-input"
          type="checkbox"
          labelText="Mostrar somente favoritos:"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
