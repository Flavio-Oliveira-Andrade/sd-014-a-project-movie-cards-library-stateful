import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Sinopse from './Sinopse';
import Imagem from './Imagem ';

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
    const {
      handleClick,
    } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleClick={ handleClick } />
        <Subtitulo value={ subtitle } handleClick={ handleClick } />
        <Imagem value={ imagePath } handleClick={ handleClick } />
        <Sinopse defaultValue={ storyline } handleClick={ handleClick } />
      </form>
    );
  }
}

export default AddMovie;
