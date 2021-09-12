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

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleChange={ this.handleChange } />
        <SubTitulo value={ subtitle } handleChange={ this.handleChange } />
        <Imagem value={ imagePath } handleChange={ this.handleChange } />
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <Avaliacao value={ rating } handleChange={ this.handleChange } />
        <Genero value={ genre } handleChange={ this.handleChange } />
        <button type="button" onClick={ onClick }>Adicionar Filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
