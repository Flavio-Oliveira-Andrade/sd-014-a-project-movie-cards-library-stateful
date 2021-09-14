import React from 'react';

class TextareaInput extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          id="textarea"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default TextareaInput;
