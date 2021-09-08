// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);

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
    const { id, value } = target;
    this.setState({ [id]: value });
  }

inputTitle = (title) => (
  <label data-testid="title-input-label" htmlFor="title">
    Título
    <input
      type="text"
      id="title"
      value={ title }
      data-testid="title-input"
      onChange={ this.handleChange }
    />
  </label>
);

  inputSubtitle = (subtitle) => (
    <label data-testid="subtitle-input-label" htmlFor="subtitle">
      Subtítulo
      <input
        type="text"
        id="subtitle"
        value={ subtitle }
        data-testid="subtitle-input"
        onChange={ this.handleChange }
      />
    </label>
  );

 inputImage = (imagePath) => (
   <label data-testid="image-input-label" htmlFor="imagePath">
     Imagem
     <input
       type="text"
       id="imagePath"
       value={ imagePath }
       data-testid="image-input"
       onChange={ this.handleChange }
     />
   </label>
 );

inputStoryline = (storyline) => (
  <label data-testid="storyline-input-label" htmlFor="storyline">
    Sinopse
    <input
      type="textarea"
      id="storyline"
      value={ storyline }
      data-testid="storyline-input"
      onChange={ this.handleChange }
    />
  </label>

);

  inputGenre = (genre) => (
    <label data-testid="genre-input-label" htmlFor="genre">
      Gênero
      <select
        value={ genre }
        id="genre"
        onChange={ this.handleChange }
        data-testid="genre-input"
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>

  );

inputRating = (rating) => (
  <label data-testid="rating-input-label" htmlFor="rating">
    Avaliação
    <input
      type="number"
      max="5"
      id="rating"
      value={ rating }
      data-testid="rating-input"
      onChange={ this.handleChange }
    />
  </label>
);

resetState(event) {
  event.preventDefault();
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

render() {
  const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
  return (
    <form data-testid="add-movie-form" htmlFor="form">
      {this.inputTitle(title)}
      {this.inputSubtitle(subtitle)}
      {this.inputImage(imagePath)}
      {this.inputStoryline(storyline)}
      {this.inputRating(rating)}
      {this.inputGenre(genre)}
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.resetState }
      >
        Adicionar filme

      </button>
    </form>

  );
}
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
