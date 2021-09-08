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

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            name="title"
            value={ title }
            onChange={ this.onChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            onChange={ this.onChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem do filme:
          <input type="text" name="imagePath" id="Imagem" value={ imagePath } onChange={ this.onChange } data-testid="image-input" />
        </label>

        <label htmlFor="storyline">
          Sinopse:
          <textarea type="text" name="storyline" id="storyline" value={ storyline } />
        </label>

        <label htmlFor="rating">
          Avaliação:
          <input type="number" name="rating" id="rating" value={ rating } />
        </label>

        <label htmlFor="genre">
          Genero:
          <input type="text" name="genre" id="genre" value={ genre } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
