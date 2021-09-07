import React, { Component } from 'react';

export class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createNewInput = this.createNewInput.bind(this);
  }

  handleChange({ target }) {
    return this.setState({
      [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  createNewInput(type, name, value, dataTestId) {
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestId }
      />
    );
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createNewInput('text', 'title', title, 'title-input') }
        </label>
      </form>
    );
  }
}

export default AddMovie;
