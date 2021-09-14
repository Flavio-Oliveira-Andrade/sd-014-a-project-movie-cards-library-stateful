import React, { Component } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import RatingForm from './RatingForm';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      // genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
        <SubTitle />
        <ImagePath />
        <StoryLine />
        <RatingForm />
      </form>
    );
  }
}

export default AddMovie;
