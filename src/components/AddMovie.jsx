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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

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
    const dataTestId = 'data-testid';
    const genreOption = 'genre-option';
    const options = [
      { value: 'action', label: 'Ação', [dataTestId]: genreOption },
      { value: 'comedy', label: 'Comédia', [dataTestId]: genreOption },
      { value: 'thriller', label: 'Suspense', [dataTestId]: genreOption },
    ];
    return (
      <select
        data-testid={ inputId }
        value={ this[name] }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
        options={ options }
      >
        <option value="action" dataTestId="genre-option">Ação</option>
        <option value="comedy" dataTestId="genre-option">Comedia</option>
        <option value="thriller" dataTestId="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { onClick, subtitle, title,
      imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título:
          {createInputs('title-input', 'title', 'text')}
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subitulo:
          {createInputs('subtitle-input', 'subtitle', 'text')}
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          {createInputs('image-input', 'imagePath', 'text')}
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          {createInputs('storyline-input', 'storyline', 'text')}
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          {createInputs('rating-input', 'rating', 'number')}
        </label>
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          {createSelectInputs('genre-input', 'genre', 'string')}
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

AddMovie.defaultProps = {
  searchText: 'No text',
  // onSearchTextChange: PropTypes.func,
  // bookmarkedOnly: PropTypes.bool,
  // onBookmarkedChange: PropTypes.func,
  selectedGenre: 'No text',
  // onSelectedGenreChange: PropTypes.func,
};

export default AddMovie;// implement AddMovie component here
