import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInputS extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="textInput"
            data-testid="text-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TextInputS.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default TextInputS;
