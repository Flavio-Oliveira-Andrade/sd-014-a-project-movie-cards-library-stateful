import React from 'react';

class InputTitle extends React.Component {
  render() {
    return (
      <label htmlFor="text" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
export default InputTitle;
