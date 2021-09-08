import React from 'react';
import movies from '../data';
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
    this.addMovie = this.addMovie.bind(this)
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovie() {
    movies.push({
      title: this.state.title,
      subtitle: this.state.subtitle,
      storyline: this.state.storyline,
      rating: this.state.rating,
      imagePath: this.state.imagePath,
      bookmarked: false,
      genre: this.state.genre,
    })
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating} = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            name="title"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            name="imagePath"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            name="storyline"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            name="rating"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.addMovie }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
