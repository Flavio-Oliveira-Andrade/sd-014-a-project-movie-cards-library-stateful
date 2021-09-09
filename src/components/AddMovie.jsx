import React from 'react';
import propTypes from 'prop-types';

import InputTitleAddMovie from './InputTitleAddMovie';
import InputStorylineAddMovie from './InputStorylineAddMovie';
import InputRatingAddMovie from './InputRatingAddMovie';
import SelectGenreAddMovie from './SelectGenreAddMovie';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
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
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitleAddMovie value={ title } onChange={ this.handleChange } />
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
        <InputStorylineAddMovie value={ storyline } onChange={ this.handleChange } />
        <InputRatingAddMovie value={ rating } onChange={ this.handleChange } />
        <SelectGenreAddMovie value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default AddMovie;
