import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  createCustomInput(id, onChange, type, value) {
    const name = id === 'image' ? 'imagePath' : id;

    return (
      <input
        data-testid={ `${id}-input` }
        id={ id }
        name={ name }
        onChange={ onChange }
        type={ type }
        value={ value }
      />
    );
  }

  createGenreInput(genre) {
    return (
      <select
        data-testid="genre-input"
        id="genre"
        name="genre"
        onChange={ this.handleChange }
        value={ genre }
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
    );
  }

  render() {
    const { handleChange } = this;
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.createCustomInput('title', handleChange, 'text', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.createCustomInput('subtitle', handleChange, 'text', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          {this.createCustomInput('image', handleChange, 'text', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline"
            name="storyline"
            onChange={ handleChange }
            value={ storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.createCustomInput('rating', handleChange, 'number', rating)}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          {this.createGenreInput(genre)}
        </label>
      </form>
    );
  }
}

export default AddMovie;
