import React, { Component } from 'react';

class TitleForm extends Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
        />
      </label>
    );
  }
}

export default TitleForm;
