import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleEvent = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { submitMovie } = this.props;
    console.log(submitMovie);

    submitMovie(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInput(type, name, id, value) {
    return (
      <input
        type={ type }
        name={ name }
        data-testid={ id }
        value={ value }
        onChange={ this.handleEvent }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      // item 7
      <form data-testid="add-movie-form">
        {/* item 8 */}
        <label htmlFor="movieTitle" data-testid="title-input-label">
          Título
          {this.createInput('text', 'title', 'title-input', title)}
        </label>
        {/* item 9 */}
        <label htmlFor="movieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.createInput('text', 'subtitle', 'subtitle-input', subtitle)}
        </label>
        {/* item 10 */}
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          {this.createInput('text', 'imagePath', 'image-input', imagePath)}
        </label>
        {/* item 11 */}
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          {this.createInput('textarea', 'storyline', 'storyline-input', storyline)}
        </label>
        {/* item 12 */}
        <label htmlFor="number" data-testid="rating-input-label">
          Avaliação
          {this.createInput('number', 'rating', 'rating-input', rating)}
        </label>
        {/* item 13 */}
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleEvent }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  submitMovie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
  }),
};

AddMovie.defaultProps = {
  submitMovie: PropTypes.shape({
    title: 'undefined',
    subtitle: 'undefined',
    imagePath: 'undefined',
    storyline: 'undefined',
    rating: 'undefined',
    genre: 'undefined',
  }),
};

export default AddMovie;
