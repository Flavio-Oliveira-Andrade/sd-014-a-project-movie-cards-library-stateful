import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
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
    this.state = (initialState);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  createInput(data, value, name, type) {
    return (
      <input
        type={ type }
        data-testid={ data }
        value={ value }
        onChange={ this.handleChange }
        name={ name }
      />
    );
  }

  createTextarea(data, value, name) {
    return (
      <textarea
        data-testid={ data }
        value={ value }
        onChange={ this.handleChange }
        name={ name }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          {this.createInput('title-input', title, 'title', 'text')}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitulo">
          Subtítulo
          {this.createInput('subtitle-input', subtitle, 'subtitle', 'text')}
        </label>
        <label data-testid="image-input-label" htmlFor="imagem">
          Imagem
          {this.createInput('image-input', imagePath, 'imagePath', 'text')}
        </label>
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          {this.createTextarea('storyline-input', storyline, 'storyline', 'text')}
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.createInput('rating-input', rating, 'rating', 'number')}
        </label>
        <label data-testid="genre-input-label" htmlFor="genero">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit" onClick={ this.handleClick }>
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
