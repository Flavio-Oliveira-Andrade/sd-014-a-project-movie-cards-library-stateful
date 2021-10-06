import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
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

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.name === 'rating'
      ? parseFloat(event.target.value || 0)
      : event.target.value;
    const name = event.target.name === 'image' ? 'imagePath' : event.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
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
      </label>);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {this.addTextField('Título', 'title', title, this.handleChange)}
        {this.addTextField('Subtítulo', 'subtitle', subtitle, this.handleChange)}
        {this.addTextField('Imagem', 'image', imagePath, this.handleChange)}
        {this.addTextField('Sinopse', 'storyline', storyline, this.handleChange)}
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
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
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            id="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
          data-testid="send-button"
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
