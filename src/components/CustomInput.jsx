import React from 'react';
import PropTypes from 'prop-types';

class CustomInput extends React.Component {
  render() {
    const { name, type, value, onChange } = this.props;
    const id = `${name}-input`;
    return (
      <input
        name={ name }
        type={ type }
        id={ id }
        data-testid={ id }
        value={ type !== 'checkbox' ? value : false }
        checked={ type === 'checkbox' ? value : false }
        onChange={ onChange }
      />
    );
  }
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.bool, PropTypes.number],
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInput;
