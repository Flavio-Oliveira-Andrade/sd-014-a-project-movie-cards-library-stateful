import React from 'react';
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
  }

  handleClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
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
      </form>
    );
  }
}

export default AddMovie;
