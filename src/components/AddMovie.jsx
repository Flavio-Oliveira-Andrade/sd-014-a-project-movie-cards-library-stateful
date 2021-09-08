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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            value={ title }
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
