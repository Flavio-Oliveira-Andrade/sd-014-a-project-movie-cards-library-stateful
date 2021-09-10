// implement AddMovie component here
import React from 'react';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
      </form>
    );
  }
}

export default AddMovie;
