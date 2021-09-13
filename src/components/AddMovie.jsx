import React, { Component } from 'react';
import '../style/Input.css';

export default class AddMovie extends Component {
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

  handleChange = ({ target }) => this.setState({ [target.state]: target.value });

  setAttribute(titulo, name, type, value) {
    return (
      <label
        htmlFor="control"
        data-testid={ name === 'imagePath' ? 'image-input-label' : `${name}-input-label` }
      >
        { titulo }
        { name !== 'storyline' ? (
          <input
            name={ name }
            type={ type }
            value={ value }
            data-testid={ name === 'imagePath' ? 'image-input' : `${name}-input` }
            onChange={ this.createMovie }
          />
        ) : (
          <textarea
            name={ name }
            type={ type }
            value={ value }
            data-testid="storyline-input"
            onChange={ this.createMovie }
          />)}
      </label>
    );
  }

  createMovie = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="add-movie">
        { this.setAttribute('Título', 'title', 'text', title) }
        { this.setAttribute('Subtítulo', 'subtitle', 'text', subtitle) }
        { this.setAttribute('Imagem', 'imagePath', 'text', imagePath) }
        { this.setAttribute('Sinopse', 'storyline', 'text', storyline) }
        { this.setAttribute('Avaliação', 'rating', 'number', rating) }
        <label htmlFor="control" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.createMovie }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
