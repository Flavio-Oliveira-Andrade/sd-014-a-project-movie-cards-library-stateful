import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    const { onClick } = this.props;

    event.preventDefault();

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

  createGenreInput(onChange, value) {
    return (
      <select
        data-testid="genre-input"
        id="genre"
        name="genre"
        onChange={ onChange }
        value={ value }
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
    const { handleChange, handleClick, createCustomInput, createGenreInput } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {createCustomInput('title', handleChange, 'text', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {createCustomInput('subtitle', handleChange, 'text', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          {createCustomInput('image', handleChange, 'text', imagePath)}
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
          {createCustomInput('rating', handleChange, 'number', rating)}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          {createGenreInput(handleChange, genre)}
        </label>
        <button data-testid="send-button" onClick={ handleClick } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
