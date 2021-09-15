import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';
import ImagePathForm from './ImagePathForm';
import StorylineForm from './StorylineForm';
import RatingForm from './RatingForm';
import GenreForm from './GenreForm';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    // const { callback } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleForm value={ title } onChange={ this.handleChange } />
        <SubtitleForm value={ subtitle } onChange={ this.handleChange } />
        <ImagePathForm value={ imagePath } onChange={ this.handleChange } />
        <StorylineForm value={ storyline } onChange={ this.handleChange } />
        <RatingForm value={ rating } onChange={ this.handleChange } />
        <GenreForm value={ genre } onChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.handleSubmit }>
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
