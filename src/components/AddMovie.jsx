import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
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
  };

  handleInputs = (title, type, dataTest, value) => (
    <input
      name={ title }
      type={ type }
      data-testid={ dataTest }
      value={ value }
      onChange={ this.handleChange }
    />
  )

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.handleInputs('title', 'text', 'title-input', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.handleInputs('subtitle', 'text', 'subtitle-input', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.handleInputs('imagePath', 'text', 'image-input', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            value={ storyline }
            name="storyline"
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.handleInputs('rating', 'number', 'rating-input', rating)}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={ genre }
            name="genre"
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.handleButton }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
