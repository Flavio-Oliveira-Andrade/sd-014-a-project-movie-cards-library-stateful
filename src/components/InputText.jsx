import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="movie" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="movie"
          name="searchText"
          data-testid="text-input"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
      </label>
    );
  }
}

InputText.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}).isRequired;

export default InputText;
