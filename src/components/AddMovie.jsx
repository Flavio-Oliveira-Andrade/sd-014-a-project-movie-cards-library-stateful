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

    return (
      <div />
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
