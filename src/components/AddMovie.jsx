// implement AddMovie component here
import React from 'react';
import Title from './Title';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
      </form>
    );
  }
}

export default AddMovie;
