import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { name, value, cb, lblName } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { lblName }
        <input
          id={ name }
          name={ name }
          data-testid={ `${name}-input` }
          type="number"
          value={ value }
          onChange={ cb }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  cb: PropTypes.func.isRequired,
  lblName: PropTypes.string.isRequired,
};

export default NumberInput;
