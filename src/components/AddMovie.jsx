import React, { Component } from 'react';
import Inputs from './Inputs';

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

        <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse:
          <textarea type="text" name="storyline" id="Sinopse" value={ storyline } onChange={ this.onChange } data-testid="storyline-input" />
        </label>

        <label htmlFor="Avaliacao" data-testid="rating-input-label">
          Avaliação:
          <input type="number" name="rating" id="Avaliacao" value={ rating } onChange={ this.onChange } data-testid="rating-input" />
        </label>

        <label htmlFor="genero" data-testid="genre-input-label">
          Genero:
          <select name="genre" id="genero" value={ genre } onChange={ this.onChange } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
