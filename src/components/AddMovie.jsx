import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="form" data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleForm }
          />
        </label>
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleForm }
          />
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleForm }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
