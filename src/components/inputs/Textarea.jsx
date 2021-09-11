import React from 'react';

class TextareaInput extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="textarea"
          value={ storyline }
          id="textarea"
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default TextareaInput;
