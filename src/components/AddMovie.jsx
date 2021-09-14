/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './FormComponents/Title';
import Subtitle from './FormComponents/Subtitle';
import ImagePath from './FormComponents/ImagePath';
import Storyline from './FormComponents/Storyline';
import Rating from './FormComponents/Rating';
import Genre from './FormComponents/Genre';
import Button from './FormComponents/Button';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  haddleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={ onClick }>
        <Title title={ title } haddleChange={ this.handdleChange } />
        <Subtitle subtitle={ subtitle } haddleChange={ this.handdleChange } />
        <ImagePath imagePath={ imagePath } haddleChange={ this.handdleChange } />
        <Storyline storyline={ storyline } haddleChange={ this.handdleChange } />
        <Rating rating={ rating } haddleChange={ this.handdleChange } />
        <Genre genre={ genre } haddleChange={ this.handdleChange } />
        <Button onClick={ onClick } state={ this.state } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  handdleClick: PropTypes.func,
}.isRequired;

export default AddMovie;
