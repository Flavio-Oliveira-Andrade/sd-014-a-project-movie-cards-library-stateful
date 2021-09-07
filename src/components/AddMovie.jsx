import React, { Component } from 'react';

export class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createNewInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createNewInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.createNewInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
      </form>
    );
  }
}

export default AddMovie;
