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
    this.handleClickButton = this.handleClickButton.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClickButton(event) {
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

  renderInput(type, text, name, valueState) {
    const testeValueInput = `${name}-input`;
    const testeValueLabel = `${name}-input-label`;
    return (
      <label data-testid={ testeValueLabel } htmlFor={ name }>
        { text }
        <input
          name={ name }
          value={ valueState }
          id={ name }
          type={ type }
          onChange={ this.handleChange }
          data-testid={ testeValueInput }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderInput('text', 'Título', 'title', title) }
        { this.renderInput('text', 'Subtítulo', 'subtitle', subtitle) }
        { this.renderInput('text', 'Imagem', 'imagePath', imagePath) }
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            id="sinopse"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={ this.handleChange }
          />
        </label>
        {this.renderInput('number', 'Avaliação', 'rating', rating)}
        <label data-testid="genre-input-label" htmlFor="genero">
          Gênero
          <select
            name="genre"
            value={ genre }
            id="genero"
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>

          </select>
        </label>
        <button type="submit" onClick={ this.handleClickButton }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
