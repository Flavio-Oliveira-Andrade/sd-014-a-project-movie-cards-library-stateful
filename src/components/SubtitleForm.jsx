import React, { Component } from 'react';

class SubtitleForm extends Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default SubtitleForm;
