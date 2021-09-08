import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const { title } = this.props;
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
      </form>
    );
  }
}

export default AddMovie;
