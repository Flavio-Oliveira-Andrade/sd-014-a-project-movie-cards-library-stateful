// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();

    const { onClick } = this.props;

    onClick();

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInput(type, nameId, testId, value) {
    return (
      <input
        type={ type }
        name={ nameId }
        id={ nameId }
        data-testid={ testId }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  createOptions() {
    const options = [
      { value: 'action', name: 'Ação' },
      { value: 'comedy', name: 'Comédia' },
      { value: 'thriller', name: 'Suspense' },
    ];

    return (
      options.map((option) => (
        <option
          key={ option.value }
          value={ option.value }
          data-testid="genre-option"
        >
          { option.name }
        </option>
      ))
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          { this.createInput('text', 'title', 'title-input', title) }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          { this.createInput('text', 'subtitle', 'subtitle-input', subtitle) }
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          { this.createInput('text', 'imagePath', 'image-input', imagePath) }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          { this.createInput('number', 'rating', 'rating-input', rating) }
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            name="genre"
            id="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            { this.createOptions() }
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
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
