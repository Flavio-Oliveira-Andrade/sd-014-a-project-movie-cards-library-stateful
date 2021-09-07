// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      rating: 0,
      imagePath: '',
      storyline: '',
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

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

  createCustomInputs(type, value, name, data) {
    return (
      <input
        type={ type }
        onChange={ this.handleChange }
        data-testid={ data }
        name={ name }
        id={ name }
        value={ value }
      />
    );
  }

  createCustomTextArea(type, value, name, data) {
    return (
      <textarea
        type={ type }
        onChange={ this.handleChange }
        data-testid={ data }
        name={ name }
        id={ name }
        value={ value }
      />
    );
  }

  createCustomSelect(type, value, name, data) {
    return (
      <select
        type={ type }
        onChange={ this.handleChange }
        data-testid={ data }
        name={ name }
        id={ name }
        value={ value }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" id="fr">
        <p>Incluir filmes</p>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          { this.createCustomInputs('text', title, 'title', 'title-input') }
        </label>
        <br />
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          { this.createCustomInputs('text', subtitle, 'subtitle', 'subtitle-input') }
        </label>
        <br />
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          { this.createCustomInputs('number', rating, 'rating', 'rating-input') }
        </label>
        <br />
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          { this.createCustomInputs('text', imagePath, 'imagePath', 'image-input') }
        </label>
        <br />
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          { this.createCustomTextArea('text', storyline, 'storyline', 'storyline-input') }
        </label>
        <br />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          { this.createCustomSelect('text', genre, 'genre', 'genre-input') }
        </label>
        <br />
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
