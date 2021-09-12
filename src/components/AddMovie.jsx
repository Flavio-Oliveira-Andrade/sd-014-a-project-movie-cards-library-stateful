// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import SubTitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';

class AddMovie extends Component {
  resetValues={
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  }

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
  }

  handleChange=({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleAdd= () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.resetValues);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleChange={ this.handleChange } />
        <SubTitulo value={ subtitle } handleChange={ this.handleChange } />
        <Imagem value={ imagePath } handleChange={ this.handleChange } />
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <Avaliacao value={ rating } handleChange={ this.handleChange } />
        <Genero value={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleAdd }
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
