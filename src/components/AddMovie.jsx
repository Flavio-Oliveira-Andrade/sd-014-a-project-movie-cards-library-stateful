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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            onChange={ this.handleChange }
            value={ title }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            onChange={ this.handleChange }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            onChange={ this.handleChange }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            onChange={ this.handleChange }
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            onChange={ this.handleChange }
            value={ rating }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option" selected>Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
      </form>
    );
  }
}

export default AddMovie;
