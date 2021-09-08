import React, { Component } from 'react';

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

    this.onChange = this.onChange.bind(this);
  }

  handleClick() {
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

  handleInput = (title, type, dataTest, value) => (
    <input
      name={ title }
      type={ type }
      data-testid={ dataTest }
      value={ value }
      onChange={ this.onChange }
    />
  )

  onChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          { this.handleInput('title', 'text', 'title-input', title)}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.handleInput('subtitle', 'text', 'subtitle-input', subtitle)}
        </label>
        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem do filme:
          {this.handleInput('imagePath', 'text', 'image-input', imagePath)}
        </label>
        <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse:
          {this.handleInput('storyLine', 'textarea', 'storyline-input', storyline)}
        </label>
        <label htmlFor="Avaliacao" data-testid="rating-input-label">
          Avaliação:
          {this.handleInput('rating', 'number', 'rating-input', rating)}
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Genero:
          <select
            name="genre"
            value={ genre }
            onChange={ this.onChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
