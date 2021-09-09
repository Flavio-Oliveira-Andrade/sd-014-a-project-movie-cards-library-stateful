import React from 'react';
import PropTypes from 'prop-types';

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
    // this.buttonClick = this.buttonClick.bind(this);
    this.createInputs = this.createInputs.bind(this);
  }

  handleChange(event) {
    // this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value);
    // console.log(this.state);
  }

  // buttonClick() {
  //   const { onClick } = this.props;
  //   onClick(this.state);
  //   this.setState({ [subtitle]: '',
  //     [title]: '',
  //     [imagePath]: '',
  //     [storyline]: '',
  //     [rating]: 0,
  //     [genre]: 'action',
  //   });
  // }

  createInputs(inputId, name, type) {
    return (
      <input
        data-testid={ inputId }
        value={ this[name] }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      />
    );
  }

  createSelectInputs(inputId, name, type) {
    // const dataTestId = 'data-testid';
    // const genreOption = 'genre-option';
    // const options = [
    //   { value: 'action', label: 'Ação', [dataTestId]: genreOption },
    //   { value: 'comedy', label: 'Comédia', [dataTestId]: genreOption },
    //   { value: 'thriller', label: 'Suspense', [dataTestId]: genreOption },
    // ];
    return (
      <select
        data-testid={ inputId }
        value={ name }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
        // options={ options }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comedia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { subtitle, title,
      imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título:
          {this.createInputs('title-input', title, 'text')}
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subitulo:
          {this.createInputs('subtitle-input', subtitle, 'text')}
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          {this.createInputs('image-input', imagePath, 'text')}
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          {this.createInputs('storyline-input', storyline, 'text')}
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          {this.createInputs('rating-input', rating, 'number')}
        </label>
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          {this.createSelectInputs('genre-input', genre, 'string')}
        </label>
        <button
          type="button"
          onClick={ this.buttonClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

// AddMovie.defaultProps = {
//   title: 'titulao',
//   subtitle: 'subtitulo',
//   storyline: 'sinopse',
//   rating: 0,
//   imagePath: 'caminho-da-imagem',
//   genre: 'action',
// };

export default AddMovie;// implement AddMovie component here
