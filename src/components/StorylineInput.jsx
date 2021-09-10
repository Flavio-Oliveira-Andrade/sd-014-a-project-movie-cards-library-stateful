import React from 'react';

class StorylineInput extends React.Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.handleChange }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

export default StorylineInput;
