import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { id, value, titulo, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { titulo }
        <textarea
          onChange={ handleChange }
          id={ id }
          name={ id }
          value={ value }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Textarea;
