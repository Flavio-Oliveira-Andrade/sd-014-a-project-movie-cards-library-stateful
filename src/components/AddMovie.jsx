import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avaliacao from './Avaliacao';
import SelectGenre from './SelectGenre';
import Sinopse from './Sinopse';

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    // Referência: (Carlos Afonso Flach - https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/88/commits/b4e0a60bfd09898afc714cfc73fa7856d4709f3a#)
    //
  };

  render() {
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <Avaliacao value={ rating } handleChange={ this.handleChange } />
        <SelectGenre value={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
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
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
