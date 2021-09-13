import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            id="search"
            data-testid="text-input"
          />
        </label>
        <label htmlFor="book" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="book"
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
}.isRequired;

export default Form;
