import React from 'react';

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

export default InputImg;
