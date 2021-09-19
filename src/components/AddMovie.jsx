import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (event) => {
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

  createInput(type, value, name, data) {
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

  createTextArea(type, value, name, data) {
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

  createSelect(type, value, name, data) {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.createInput('text', title, 'title', 'title-input') }
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('text', subtitle, 'subtitle', 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.createInput('text', imagePath, 'imagePath', 'image-input') }
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          { this.createTextArea('text', storyline, 'storyline', 'storyline-input') }
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          { this.createInput('number', rating, 'rating', 'rating-input') }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          { this.createSelect('text', genre, 'genre', 'genre-input') }
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>

    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
