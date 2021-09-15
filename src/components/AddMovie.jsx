import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  generateInputTag(labelText, type, data, value) {
    return (
      <label htmlFor={ data } data-testid={ `${data}-input-label` }>
        { labelText }
        <input
          type={ type }
          value={ value }
          data-testid={ `${data}-input` }
          onChange={ this.handleChange }
          name={ data }
        />
      </label>
    );
  }

  generateImageTag(valueParameter) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ valueParameter }
          data-testid="image-input"
          onChange={ this.handleChange }
          name="imagePath"
        />
      </label>
    );
  }

  generateStorylineTag(valueParameter) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ valueParameter }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  generateSelectTag(valueParameter) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          onChange={ this.handleChange }
          value={ valueParameter }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  generateButton(callback) {
    return (
      <button
        data-testid="send-button"
        onClick={ callback }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.generateInputTag('Título', 'text', 'title', title) }
        { this.generateInputTag('Subtítulo', 'text', 'subtitle', subtitle) }
        { this.generateImageTag(imagePath) }
        { this.generateInputTag('Avaliação', 'number', 'rating', rating) }
        { this.generateStorylineTag(storyline) }
        { this.generateSelectTag(genre) }
        { this.generateButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
