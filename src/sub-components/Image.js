import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { title, handleChange, customize, text, name } = this.props;
    return (
      <div>
        <label htmlFor={ customize } data-testid={ `${customize}-input-label` }>
          { text }
          <input
            id={ customize }
            name={ name }
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

export default Image;
