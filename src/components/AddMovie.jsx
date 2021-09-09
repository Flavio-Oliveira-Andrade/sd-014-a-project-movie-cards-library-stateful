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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  customInput(type, id, value, dataTestId) {
    return (
      <input
        type={ type }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestId }
        name={ id }
      />
    );
  }

  customTextArea(name, value, dataTestId) {
    return (
      <textarea
        name={ name }
        id={ name }
        cols="30"
        rows="10"
        value={ value }
        data-testid={ dataTestId }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.customInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.customInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.customInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          { this.customTextArea('storyline', storyline, 'storyline-input') }
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.customInput('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="select-genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="select-genre"
            data-testid="genre-input"
            onChange={ this.handleChange }
            value={ genre }
          >
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
