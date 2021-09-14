// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input" data-testid="title-input-label">
          Título
          <input
            id="text-input"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ subtitle }
            id="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            onChange={ imagePath }
            id="image-input"
          />
        </label>
        <label htmlFor="textarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textarea"
            value={ storyline }
            onChance={ storyline }
            data-testid="storyline-input"
            rows="4"
            cols="50"
          />
        </label>
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="number"
            value={ rating }
            onChange={ rating }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="select" data-testid="genre-input-label">
          Gênero
          <select id="select-genre" value={ genre }>
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
