import React from 'react';

class InputStoryline extends React.Component {
  render() {
    return (
      <label
        htmlFor="input-storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="input-storyline"
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default InputStoryline;
