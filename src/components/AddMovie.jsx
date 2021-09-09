import React from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';

import ImagePath from './ImagePath';
import MovieRating from './MovieRating';
import Sinopse from './Sinopse';
import Button from './Button';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="input-title"
            name="title"
            value={ title }
            onChange={ this.handleOnChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="input-subtitle"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleOnChange }
            data-testid="subtitle-input"
          />
        </label>
        <ImagePath value={ imagePath } handleOnChange={ this.handleOnChange } />
        <Sinopse value={ storyline } handleOnChange={ this.handleOnChange } />
        <MovieRating value={ rating } handleOnChange={ this.handleOnChange } />
        <Genre value={ genre } handleOnChange={ this.handleOnChange } />
        <Button handleOnClick={ this.handleOnClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
