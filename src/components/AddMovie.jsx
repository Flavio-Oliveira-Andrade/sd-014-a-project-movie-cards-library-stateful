// implement AddMovie component here
import React from 'react';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  inputs(type, name, datatestid, value) {
    return (
      <input
        type={ type }
        name={ name }
        data-testid={ datatestid }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  select() {
    const { genre } = this.state;
    return (
      <select
        name="genre"
        onChange={ this.handleChange }
        data-testid="genre-input"
        value={ genre }
      >
        <option value="action" data-testid="genre-option">
          Ação
        </option>
        <option value="comedy" data-testid="genre-option">
          Comédia
        </option>
        <option value="thriller" data-testid="genre-option">
          Suspense
        </option>
      </select>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.inputs('text', 'title', 'title-input', title)}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputs('text', 'subtitle', 'subtitle-input', subtitle)}
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          { this.inputs('text', 'imagePath', 'image-input', imagePath)}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          { this.inputs('number', 'rating', 'rating-input', rating)}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          { this.select() }
        </label>
        <button type="submit" data-testid="send-button" onClick="">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
