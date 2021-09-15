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
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.createInputs = this.createInputs.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  buttonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInputs(inputId, name, type, value) {
    return (
      <input
        data-testid={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      />
    );
  }

  createSelectInputs(inputId, name, type, value) {
    return (
      <select
        data-testid={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        <option value="action" name="genre" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { subtitle, title,
      imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título:
          {this.createInputs('title-input', 'title', 'text', title)}
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo:
          {this.createInputs('subtitle-input', 'subtitle', 'text', subtitle)}
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          {this.createInputs('image-input', 'imagePath', 'text', imagePath)}
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          {this.createInputs('storyline-input', 'storyline', 'text', storyline)}
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          {this.createInputs('rating-input', 'rating', 'number', rating)}
        </label>
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          {this.createSelectInputs('genre-input', 'genre', 'string', genre)}
        </label>
        <button
          type="button"
          onClick={ this.buttonClick }
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

export default AddMovie;// implement AddMovie component here
