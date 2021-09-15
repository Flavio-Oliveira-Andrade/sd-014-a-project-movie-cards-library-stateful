import React from 'react';
import propTypes from 'prop-types';

import InputTitleAddMovie from './InputTitleAddMovie';
import InputSubtitleAddMovie from './InputSubtitleAddMovie';
import InputStorylineAddMovie from './InputStorylineAddMovie';
import InputRatingAddMovie from './InputRatingAddMovie';
import SelectGenreAddMovie from './SelectGenreAddMovie';
import InputImgAddMovie from './InputImgAddMovie';

const initialState = {
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
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <InputTitleAddMovie value={ title } onChange={ this.handleChange } />
        <InputSubtitleAddMovie value={ subtitle } onChange={ this.handleChange } />
        <InputImgAddMovie value={ imagePath } onChange={ this.handleChange } />
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
