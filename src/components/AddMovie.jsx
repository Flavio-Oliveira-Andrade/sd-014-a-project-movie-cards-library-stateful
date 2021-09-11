/* eslint-disable jsx-a11y/control-has-associated-label */
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const EstadoInicial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = EstadoInicial;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evento) {
    const value = evento.target.name === 'rating'
      ? (parseFloat(evento.target.value || 0)) : evento.target.value;
    const name = evento.target.name === 'image' ? 'imagePath' : evento.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(EstadoInicial);
  }

  addTextField(label, id, value, onChange) {
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        {label}
        <input
          type="text"
          name={ id }
          value={ value }
          id={ id }
          data-testid={ `${id}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {this.addTextField('Titulo', 'title', title, this.handleChange)}
        {this.addTextField('Subtitulo', 'subtitle', subtitle, this.handleChange)}
        {this.addTextField('Imagem', 'image', imagePath, this.handleChange)}
        {this.addTextField('Sinopse', 'storyline', storyline, this.handleChange)}
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="text"
            name="rating"
            value={ rating }
            id="rating"
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit } data-testid="send-button">
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
