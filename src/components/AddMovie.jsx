// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
    });
  }

  handleCheck({ target }) {
    const { click } = target;
    const value = target.checked;
    this.setState({
      [click]: value,
    });
  }

  createInput(data, value) {
    return (
      <input
        type="text"
        data-testid={ data }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          {this.createInput('title-input', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitulo">
          Subtítulo
          {this.createInput('subtitle-input', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="imagem">
          Imagem
          {this.createInput('image-input', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genero">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleCheck }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

/*  AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
