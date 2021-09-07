import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { titulo }
        <input
          onChange={ handleChange }
          type="number"
          id={ id }
          name={ id }
          value={ value }
          data-testid={ `${id}-input` }
          max="10"
          step="0.1"
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputNumber;
