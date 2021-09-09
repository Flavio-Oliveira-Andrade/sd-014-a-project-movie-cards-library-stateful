import React from 'react';
import PropTypes from 'prop-types';

class CustomInput extends React.Component {
  render() {
    const { name, type, value, onChange, labelText } = this.props;

    return (
      <label data-testid={ `${name}-label` } htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          id={ name }
          data-testid={ name }
          value={ type !== 'checkbox' ? value : false }
          checked={ type === 'checkbox' ? value : false }
          onChange={ onChange }
        />
      </label>
    );
  }
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default CustomInput;
