import React from 'react';

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

export default Input;
