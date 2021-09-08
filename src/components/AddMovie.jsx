import React, { Component } from 'react';

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
  }
  // Funçoes em baixo

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Titulo:
          <input type="text" id="title" value={ title } />
        </label>
        <label htmlFor="subtitle">
          Subtitulo:
          <input type="text" id="subtitle" value={ subtitle } />
        </label>
        <label htmlFor="imagePath">
          Imagem do filme:
          <input type="text" id="imagePath" value={ imagePath } />
        </label>
        <label htmlFor="storyline">
          Sinopse:
          <textarea type="text" id="storyline" value={ storyline } />
        </label>
        <label htmlFor="rating">
          Avaliação:
          <input type="number" id="rating" value={ rating } />
        </label>
        <label htmlFor="genre">
          Genero:
          <input type="text" id="genre" value={ genre } />
        </label>
      </form>
    );
  }
}

export default AddMovie;