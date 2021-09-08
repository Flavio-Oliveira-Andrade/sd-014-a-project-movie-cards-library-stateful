import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label className="form-label" htmlFor={ id } data-testid={ `${id}-input-label` }>
          { titulo }
        </label>
        <input
          className="form-control"
          onChange={ handleChange }
          type="number"
          id={ id }
          name={ id }
          value={ value }
          data-testid={ `${id}-input` }
          max="10"
          step="0.1"
        />
      </div>
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
