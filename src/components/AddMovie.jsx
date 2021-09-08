import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type='number'
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
            name="rating"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            name="genre"
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

// AddMovie.propTypes = {
//   subtitle: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
// };

export default AddMovie;
