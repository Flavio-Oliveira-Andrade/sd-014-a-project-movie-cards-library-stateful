// implement AddMovie component here
// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGen from './InputGen';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  newMovie = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        <InputGen
          config={ ['text', 'title', 'title-input', title, null,
            this.handleChange, 'Título'] }
        />
        <InputGen
          config={ ['text', 'subtitle', 'subtitle-input', subtitle, null,
            this.handleChange, 'Subtítulo'] }
        />
        <InputGen
          config={ ['img', 'imagePath', 'image-input', imagePath, null,
            this.handleChange, 'Imagem'] }
        />
        <InputGen
          config={ ['text', 'storyline', 'storyline-input', storyline, null,
            this.handleChange, 'Sinopse'] }
        />
        <InputGen
          config={ ['number', 'rating', 'rating-input', rating, null,
            this.handleChange, 'Avaliação'] }
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          <span>Gênero</span>
          <select
            data-testid="genre-input"
            value={ genre }
            name="genre"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.newMovie } type="submit">
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
