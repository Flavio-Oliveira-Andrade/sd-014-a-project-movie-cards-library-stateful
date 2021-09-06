import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              type="text"
              value={ title }
              name="title"
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              value={ subtitle }
              name="subtitle"
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              type="text"
              value={ imagePath }
              name="imagePath"
              onChange={ this.handleChange }
              data-testid="image-input"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              type="text"
              value={ storyline }
              name="storyline"
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              type="number"
              value={ rating }
              name="rating"
              onChange={ this.handleChange }
              data-testid="rating-input"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              value={ genre }
              name="genre"
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.handleButton }
          >
            Adicionar filme
          </button>

        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
