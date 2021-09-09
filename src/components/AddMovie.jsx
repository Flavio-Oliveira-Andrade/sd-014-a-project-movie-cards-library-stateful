import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormsConstructor from './FormsConstructor';

class AddMovie extends Component {
  constructor(props) {
    super(props);

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
    const { subtitle, title,
      imagePath, storyline, rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
