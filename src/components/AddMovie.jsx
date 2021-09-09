import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormsConstructor from './FormsConstructor';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  loadText = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { subtitle, title,
      imagePath, storyline, rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormsConstructor
          nome={ ['title', 'Título', title] }
          load={ this.loadText }
        />
        <FormsConstructor
          nome={ ['subtitle', 'Subtítulo', subtitle] }
          load={ this.loadText }
        />
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            name="imagePath"
            data-testid="image-input"
            onChange={ this.loadText }
          />
        </label>
        <FormsConstructor
          nome={ ['storyline', 'Sinopse', storyline] }
          load={ this.loadText }
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            name="rating"
            data-testid="rating-input"
            onChange={ this.loadText }
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
