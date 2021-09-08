import React from 'react';
import PropTypes from 'prop-types';

class InputCheckBox extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <div className="mb-3 form-check">
        <input
          className="form-check-input"
          onChange={ handleChange }
          type="checkbox"
          id={ id }
          name={ id }
          checked={ value }
          data-testid={ `${id}-input` }
        />
        <label className="form-label" htmlFor={ id } data-testid={ `${id}-input-label` }>
          { titulo }
        </label>
      </div>
    );
  }
}

InputCheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  titulo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputCheckBox;
