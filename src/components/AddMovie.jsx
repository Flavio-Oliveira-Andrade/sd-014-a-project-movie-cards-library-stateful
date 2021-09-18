import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath:'',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const {
      onClick,
    } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" id="subtitle" />
        </label>
        <label htmlFor="title">
          Título
          <input type="text" id="title" />
        </label>
        <label htmlFor="imagePath">
          Caminho da imagem
          <input type="text" id="imagePath" />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <input type="text" id="storyline" />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" id="rating" />
        </label>
        <label htmlFor="genre">
          Gênero
          <input type="text" id="genre" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
