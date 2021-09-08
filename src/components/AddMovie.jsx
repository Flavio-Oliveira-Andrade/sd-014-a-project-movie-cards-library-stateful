import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            value={ title }
            data-testid="title-input"
            onChange={ title }
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
