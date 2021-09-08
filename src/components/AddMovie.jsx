import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
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
    const { name, value } = target;
    this.setState((state) => ({ ...state, [name]: value }));
  }

  render() {
    const {
      state: { title, subtitle, imagePath, storyline, rating, genre },
    } = this;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="image" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          name="imagePath"
          id="image"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          name="storyline"
          id="sinopse"
          value={ storyline }
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select 
          id="genre"
          name="genre"
          onChange={ this.handleChange }
          value={ genre }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button">Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
