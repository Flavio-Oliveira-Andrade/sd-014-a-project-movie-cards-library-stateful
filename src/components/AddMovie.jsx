import React from 'react';
import PropTypes from 'prop-types';
import Seletor from './formCompose/Seletor';
import Avaliar from './formCompose/Avaliar';
import Sinopse from './formCompose/Sinopse';

class AddMovie extends React.Component {
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
    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-title">
          Título
          <input
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
            name="title"
            id="input-title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
            name="subtitle"
            id="input-subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input-image">
          Imagem
          <input
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
            name="imagePath"
            id="input-image"
          />
        </label>
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <Avaliar rating={ rating } handleChange={ this.handleChange } />
        <Seletor genre={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
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
