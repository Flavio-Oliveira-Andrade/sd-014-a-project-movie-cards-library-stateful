import React from 'react';
import PropTypes from 'prop-types';
import Title from './subAddMovies/Title';
import ImagePath from './subAddMovies/ImagePath';
import Subtitle from './subAddMovies/Subtitle';
import Storyline from './subAddMovies/Storyline';
import Rating from './subAddMovies/Rating';

const stateStart = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = stateStart;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) { // event.target
    const { name } = target; // target.value.name
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) { // e = event
    e.preventDefault(); // evita processamento automático
    const { onClick } = this.props;
    onClick(this.state);

    this.setState(stateStart);
  }

  render() {
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <Storyline
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <Rating
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired };

export default AddMovie;
