import React from 'react';

class InputSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="input-subtitle"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
export default InputSubtitle;
