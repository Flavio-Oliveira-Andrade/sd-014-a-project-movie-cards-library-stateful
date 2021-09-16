import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.createNewInput = this.createNewInput.bind(this);

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
    return this.setState({
      [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  createNewInput(type, name, value, dataTestId) {
    // Recebi ajuda do Filipe Brochier pra resolver problemas no lint e requisitos 12 e 13

    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ this.handleChange }
        data-testid={ dataTestId }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          { this.createNewInput('text', 'title', title, 'title-input') }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          { this.createNewInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          { this.createNewInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="add-textarea"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="storyline">
          Avaliação
          { this.createNewInput('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
