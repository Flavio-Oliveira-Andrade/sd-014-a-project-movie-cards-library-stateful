import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelInputGen from './LabelInputGen';

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
  }

  // Função genérica apresentada no course (lembrado pelo Rod)
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // Botão copiado do Marcello
  handleClick = (event) => {
    event.preventDefault();
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return ( // Ideia de array com Pablo
      <form data-testid="add-movie-form">
        <LabelInputGen
          atributes={ ['title', 'title-input-label', 'Título', 'text', 'title', title,
            'title-input', this.handleChange] }
        />
        <LabelInputGen
          atributes={ ['subtitle', 'subtitle-input-label', 'Subtítulo', 'text',
            'subtitle', subtitle, 'subtitle-input', this.handleChange] }
        />
        <LabelInputGen
          atributes={ ['imagePath', 'image-input-label', 'Imagem', 'text', 'imagePath',
            imagePath, 'image-input', this.handleChange] }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <LabelInputGen
          atributes={ ['rating', 'rating-input-label', 'Avaliação', 'number', 'rating',
            rating, 'rating-input', this.handleChange] }
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
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
