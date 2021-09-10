import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { name, type, handleChange,
      value, labelText, id } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${name}-input-label` }
      >
        { labelText }
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ id }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Inputs;
