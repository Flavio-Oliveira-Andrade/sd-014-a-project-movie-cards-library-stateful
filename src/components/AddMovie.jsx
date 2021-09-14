import React, { Component } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      // rating: 0,
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
      </form>
    );
  }
}

export default AddMovie;
