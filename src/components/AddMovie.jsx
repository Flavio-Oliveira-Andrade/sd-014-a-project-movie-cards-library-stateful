// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    // Chamando o pai
    super(props);
    // Criando estado e definindo estado inicial
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Acessa a chave targe, do objeto evento e salva no state
  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  createInput(tipo, value, name, dataTestid) {
    return (
      <input
        type={ tipo }
        value={ value }
        name={ name }
        data-testid={ dataTestid }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.createInput('text', title, 'title', 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.createInput('text', subtitle, 'subtitle', 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          { this.createInput('text', imagePath, 'imagePath', 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          { this.createInput('textarea', storyline, 'storyline', 'storyline-input') }
        </label>
        <label data-testid="rating-input-label" htmlFor="storyline-input">
          Avaliação
          { this.createInput('number', rating, 'rating', 'rating-input') }
        </label>
      </form>
    );
  }
}

export default AddMovie;
