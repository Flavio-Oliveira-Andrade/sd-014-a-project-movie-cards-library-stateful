import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          name="searchText"
          type="text"
          data-testid="text-input"
          value={ value }
          onChange={ onChange }
          id="text-input"
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
