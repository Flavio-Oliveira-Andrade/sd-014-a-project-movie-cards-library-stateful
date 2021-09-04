// implement AddMovie component here
// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGen from './InputGen';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = { title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    const { handleChange } = this;
    return (
      <form action="" data-testid="add-movie-form">
        <InputGen
          config={ ['text', 'title', 'title-input', title, null,
            handleChange, 'Título'] }
        />
        <InputGen
          config={ ['text', 'subtitle', 'subtitle-input', subtitle, null,
            handleChange, 'Subtítulo'] }
        />
        <InputGen
          config={ ['img', 'imagePath', 'image-input', imagePath, null,
            handleChange, 'Imagem'] }
        />
        <InputGen
          config={ ['textarea', 'storyline', 'storyline-input', storyline, null,
            handleChange, 'Sinopse'] }
        />
        <InputGen
          config={ ['number', 'rating', 'rating-input', rating, null,
            handleChange, 'Avaliação'] }
        />
        <label htmlFor="select-input" data-testid="genre-input-label">
          <span>Gênero</span>
          <select data-testid="genre-input" name="select-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
