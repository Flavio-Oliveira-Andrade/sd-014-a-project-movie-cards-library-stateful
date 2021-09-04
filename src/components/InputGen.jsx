import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGen extends Component {
  render() {
    const { config } = this.props;
    const [type, name, dataTestId, value, checked, onChange, labelText] = config;

    return (
      <label htmlFor={ dataTestId } data-testid={ `${dataTestId}-label` }>
        <span>{ labelText }</span>
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputGen.propTypes = {
  config: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.number,
  ])).isRequired,
};

export default InputGen;
