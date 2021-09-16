// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  createInput(type, name, value, dataTestid) {
    return (
      <input
        type={ type }
        name={ name }
        onChange={ this.handleChange }
        value={ value }
        data-testid={ dataTestid }
      />
    );
  }

  createTextArea(name, value, dataTestid) {
    return (
      <textarea
        name={ name }
        onChange={ this.handleChange }
        value={ value }
        data-testid={ dataTestid }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title'">
          Título
          { this.createInput('text', 'title', title, 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          { this.createInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          { this.createInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          {this.createTextArea('storyline', storyline, 'storyline-input') }
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          { this.createInput('number', 'rating', rating, 'rating-input') }
        </label>
      </form>
    );
  }
}

export default AddMovie;
