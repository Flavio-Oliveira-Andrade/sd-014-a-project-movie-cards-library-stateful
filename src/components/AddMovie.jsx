import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleInput }
          />

        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleInput }
          />

        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleInput }
          />

        </label>
      </form>
    );
  }
}

export default AddMovie;
