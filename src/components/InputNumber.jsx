import React from 'react';

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
        />
      </label>
    );
  }
}

export default InputNumber;
