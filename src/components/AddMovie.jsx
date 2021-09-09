// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      rating: 0,
      imagePath: '',
      storyline: '',
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="texto" data-testid="title-input-label">
          Título
          <input
            type="text"
            value="searchText"
            id="texto"
            data-testid="text-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value="searchText"
            id="subtitle"
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="texto" data-testid="title-input-label">
          Avaliação
          <input
            type="text"
            value="searchText"
            id="texto"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="texto" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value="searchText"
            id="texto"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            value="storyline"
            id="storyline"
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <input
            type="text"
            value="genre"
            id="genre"
            data-testid="genre-input"
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
