import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Sinopse from './Sinopse';
import Imagem from './Imagem ';
import Avaliacao from './Avaliacao';
import Genero from './Genero';

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
    this.handleClick = this.handleClick.bind(this);
    this.movieMaker = this.movieMaker.bind(this);
  }

  handleClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  movieMaker(event) {
    const { onClick } = this.props;
    event.preventDefault();
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
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleClick={ this.handleClick } />
        <Subtitulo value={ subtitle } handleClick={ this.handleClick } />
        <Imagem value={ imagePath } handleClick={ this.handleClick } />
        <Sinopse defaultValue={ storyline } handleClick={ this.handleClick } />
        <Avaliacao rating={ rating } handleClick={ this.handleClick } />
        <Genero value={ genre } handleClick={ this.handleClick } />

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.movieMaker }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;
