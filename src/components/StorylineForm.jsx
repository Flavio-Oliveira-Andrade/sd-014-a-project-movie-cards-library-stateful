import React, { Component } from 'react';

class StorylineForm extends Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          data-testid="storyline-input"
          type="text"
        />
      </label>
    );
  }
}

export default StorylineForm;
