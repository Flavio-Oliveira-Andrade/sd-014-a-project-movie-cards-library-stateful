import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
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

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  onClick = () => {};
  // Função criada para passar no lint, pois o tamanho do form estava muito grande. Ajuda do Marcello Alves para encontrar solução e criar função. <3

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state; // Desestrutura objeto state para não agarrar no lint. Aula 12.1 - min. 51;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title-input"
            onChange={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle-input"
            onChange={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image-input"
            onChange={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline-input"
            onChange={ storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="image-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating-input"
            onChange={ rating }
          />
        </label>
        <label data-testid="genre-input-label" hmtlFor="genre">
          Gênero
          <select data-testid="genre-input" value={ genre } name="genre">
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        </label>
        <button data-testid="send-button" onClick={}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;