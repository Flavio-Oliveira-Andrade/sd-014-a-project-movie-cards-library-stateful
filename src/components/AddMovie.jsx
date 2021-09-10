import React from 'react';
import propTypes from 'prop-types';

import InputTitleAddMovie from './InputTitleAddMovie';
import InputSubtitleAddMovie from './InputSubtitleAddMovie';
import InputStorylineAddMovie from './InputStorylineAddMovie';
import InputRatingAddMovie from './InputRatingAddMovie';
import SelectGenreAddMovie from './SelectGenreAddMovie';
import InputImgAddMovie from './InputImgAddMovie';
import ButtonAddMovie from './ButtonAddMovie';

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
        <InputSubtitleAddMovie value={ subtitle } onChange={ this.handleChange } />
        <InputImgAddMovie value={ imagePath } onChange={ this.handleChange } />
        <InputStorylineAddMovie value={ storyline } onChange={ this.handleChange } />
        <InputRatingAddMovie value={ rating } onChange={ this.handleChange } />
        <SelectGenreAddMovie value={ genre } onChange={ this.handleChange } />
        <ButtonAddMovie onClick={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default AddMovie;
