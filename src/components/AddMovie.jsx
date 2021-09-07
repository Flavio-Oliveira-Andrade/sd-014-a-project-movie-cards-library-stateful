// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }
  // muitas repetições, trocar futuramente por uma classe única para fazer o trabalho

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
          </label>
          <input
            id="title-input"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ title }
          />
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            id="subtitle-input"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ subtitle }
          />
          <label htmlFor="image" data-testid="image-input-label">
            Imagem
          </label>
          <input
            id="image"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ imagePath }
          />
          <label htmlFor="sinopse" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            id="sinopse"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ storyline }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
