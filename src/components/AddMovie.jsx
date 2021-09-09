import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
      storyline: '',
    });
  }

  handleInput(type, value, dataTest, name) {
    return (
      <input
        type={ type }
        value={ value }
        data-testid={ dataTest }
        onChange={ this.handleChange }
        name={ name }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="add-movie" data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          <span>Título: </span>
          { this.handleInput('text', title, 'title-input', 'title') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          <span>Subtítulo: </span>
          { this.handleInput('text', subtitle, 'subtitle-input', 'subtitle') }
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          <span>Imagem: </span>
          { this.handleInput('text', imagePath, 'image-input', 'imagePath') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          <span>Sinopse: </span>
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          <span>Avaliação: </span>
          { this.handleInput('number', rating, 'rating-input', 'rating') }
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          <span>Gênero: </span>
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
        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
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
