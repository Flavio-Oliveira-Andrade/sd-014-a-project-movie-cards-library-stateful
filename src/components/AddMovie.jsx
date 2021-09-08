// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './comp-add-movie/Titulo';
import Subtitulo from './comp-add-movie/Subtitulo';
import Imagem from './comp-add-movie/Imagem';
import Sinopse from './comp-add-movie/Sinopse';
import Avaliacao from './comp-add-movie/Avaliacao';
import Genero from './comp-add-movie/Genero';
import Botao from './comp-add-movie/Botao';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleOnChange = this.handleOnChange.bind(this);
    this.OnClickFunc = this.OnClickFunc.bind(this);
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  OnClickFunc = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo title={ title } handleOnChange={ this.handleOnChange } />
        <Subtitulo subtitle={ subtitle } handleOnChange={ this.handleOnChange } />
        <Imagem imagePath={ imagePath } handleOnChange={ this.handleOnChange } />
        <Sinopse storyline={ storyline } handleOnChange={ this.handleOnChange } />
        <Avaliacao rating={ rating } handleOnChange={ this.handleOnChange } />
        <Genero genre={ genre } handleOnChange={ this.handleOnChange } />
        <Botao OnClickFunc={ this.OnClickFunc } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
