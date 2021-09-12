import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Textarea from './Textarea';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <ImagePath />
        <Textarea />
      </form>
    );
  }
}

export default AddMovie;
