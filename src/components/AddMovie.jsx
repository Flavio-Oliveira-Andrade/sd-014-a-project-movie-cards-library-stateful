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
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleSubtitleChange = (event) => {
    this.setState({ subtitle: event.target.value });
  }

  handleImageChange = (event) => {
    this.setState({ imagePath: event.target.value });
  }

  handleStorylineChange = (event) => {
    this.setState({ storyline: event.target.value });
  }

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  }

  handleGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  }

  // onClick = (event) => {
  //   // event.preventDefault();
  //   const { onClick } = this.props;

  // }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    const { onClick } = this.props;

    return (
      <form onSubmit={ onClick } data-testid="add-movie-form">
        <label htmlFor="add-movie-form" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleSubtitleChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleImageChange }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleStorylineChange }
          />
        </label>

        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleRatingChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleGenreChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>

          </select>
        </label>

        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
