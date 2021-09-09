import React from 'react';

class AddMovie extends React.Component {
  construtor() {
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

  handleSubmit = (event) => {
    event.preventDefault();
  //   // const { decidindo } = this.state;
  //   // enviar p lista
  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

    render(); {
    const { subtitle, title, imagePath, storyline, rating }
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleLabel" data-testid="title-input-label">
          Título:
          <input
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitleLabel" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imgLabel" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storylineLabel" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="ratingLabel" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genreLabel" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ console.log('oi') }>Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
