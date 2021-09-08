// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label
          data-testid="title-input-label"
          htmlFor="titulo"
        >
          Título
          <input
            name="title"
            value={ title }
            id="titulo"
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label 
        data-testid="subtitle-input-label"
        htmlFor="subtitulo"
        >
          Subtítulo
          <input 
          name="subtitle"
          value= { subtitle }
          id="subtitulo"
          type="text"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          />
        </label>
        <label 
        data-testid="image-input-label"
        htmlFor="img"
        >
          Imagem
          <input
          name="imagePath"
          value={ imagePath }
          id="img"
          type="text"
          data-testid="image-input"
          onChange={ this.handleChange }
          />
        </label>
        <label
        data-testid="storyline-input-label"
        htmlFor="sinopse"
        >
          Sinopse
          <textarea
          name="storyline"
          value={ storyline }
          id="sinopse" 
          data-testid="storyline-input"
          cols="30" 
          rows="10"
          onChange= { this.handleChange }
          >
          </textarea>
        </label>
        <label
        data-testid="rating-input-label"
        htmlFor="rating"
        >
          Avaliação
          <input 
          type="number" 
          name="rating" 
          id="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
