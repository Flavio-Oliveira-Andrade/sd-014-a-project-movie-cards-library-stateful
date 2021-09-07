import React from 'react';
import PropTypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const { id, src, titulo, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { titulo }
        <input
          onChange={ handleChange }
          type="text"
          id={ id }
          name="imagePath"
          src={ src }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

InputImg.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImg;
