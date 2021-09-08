import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { children, id, onChange, value } = this.props;

    return (
      <label data-testid={ `${id}-input-label` } htmlFor={ id }>
        { children }
        <input
          data-testid={ `${id}-input` }
          id={ id }
          name={ id }
          onChange={ onChange }
          type="text"
          value={ value }
        />
      </label>
    );
  }
}

export default TextInput;
