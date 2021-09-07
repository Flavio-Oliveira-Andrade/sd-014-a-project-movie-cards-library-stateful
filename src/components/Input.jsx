import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { titulo }
        <input
          onChange={ handleChange }
          type="text"
          id={ id }
          name={ id }
          value={ value }
          src={ value }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
