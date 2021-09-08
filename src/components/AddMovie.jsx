// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      title,
      subtitle,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="titulo"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            value={ title }
            id="titulo"
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label 
        data-testid="subtitle-input-label"
        htmlFor="subtitulo"
        >
          Subtítulo
          <input 
          name="subtitle"
          value= { subtitle }
          id="subtitulo"
          type="text"
          data-testid="subtitle-input"
          onChange= { this.handleChange }
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
