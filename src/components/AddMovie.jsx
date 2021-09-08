// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleAux from './auxAddMovie/TitleAux';
import SubtitleAux from './auxAddMovie/SubtitleAux';
import ImagePathAux from './auxAddMovie/ImagePathAux';
import StorylineAux from './auxAddMovie/StorylineAux';
import RatingAux from './auxAddMovie/RatingAux';
import SelectAux from './auxAddMovie/SelectAux';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.initialState = this.initialState.bind(this);
    this.initialState();
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  async addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.initialState();
  }

  initialState() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleAux title={ title } handleChange={ this.handleChange } />
        <SubtitleAux subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePathAux imagePath={ imagePath } handleChange={ this.handleChange } />
        <StorylineAux storyline={ storyline } handleChange={ this.handleChange } />
        <RatingAux rating={ rating } handleChange={ this.handleChange } />
        <SelectAux genre={ genre } name="genre" handleChange={ this.handleChange } />
        <button type="button" data-testid="send-button" onClick={ this.addMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
