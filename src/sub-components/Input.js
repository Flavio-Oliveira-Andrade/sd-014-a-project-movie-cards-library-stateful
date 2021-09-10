import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { title, handleChange, customize, text } = this.props;
    return (
      <div>
        <label htmlFor={ customize } data-testid={ `${customize}-input-label` }>
          { text }
          <input
            id={ customize }
            name={ customize }
            data-testid={ `${customize}-input` }
            type="text"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Input;
