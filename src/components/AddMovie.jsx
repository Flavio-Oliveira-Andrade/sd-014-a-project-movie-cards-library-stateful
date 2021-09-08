// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import ImagePath from './ImagePath';
import Sinopse from './Sinopse';
import NewMovieRating from './NewMovieRating';
import Genre from './Genre';

const INITIAL_STATE = {
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

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <NewMovieRating value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ (e) => {
            e.preventDefault();
            onClick(this.state);
            this.setState(INITIAL_STATE);
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
