import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-search" data-testid="text-input-label">
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            id="input-search"
            data-testid="text-input"
          />
          Inclui o texto:
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default Form;
