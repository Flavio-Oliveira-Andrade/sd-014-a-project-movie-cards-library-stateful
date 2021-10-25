import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  bookmarked: false,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  createInputElement(name, type, value) {
    return (
      <input
        type={ type }
        name={ name }
        onChange={ this.handleChange }
        value={ value }
        data-testid={ name === 'imagePath' ? 'image-input' : `${name}-input` }
      />
    );
  }

  createStorylineInputElement(initialValue) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          onChange={ this.handleChange }
          value={ initialValue }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  createGenderSelectElement(initialValue) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ initialValue }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option" defaultValue>Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.createInputElement('title', 'text', title)}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.createInputElement('subtitle', 'text', subtitle)}
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          {this.createInputElement('imagePath', 'text', imagePath)}
        </label>
        {this.createStorylineInputElement(storyline) }
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.createInputElement('rating', 'number', rating)}
        </label>
        {this.createGenderSelectElement(genre)}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleSubmit }
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
