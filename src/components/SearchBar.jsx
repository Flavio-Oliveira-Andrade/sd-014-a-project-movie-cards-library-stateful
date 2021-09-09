import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <CustomInput
          name="text-input"
          type="text"
          labelText="Inclui o texto:"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
