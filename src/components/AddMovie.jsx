// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

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
    const { onClick } = this.props;
    return (
      <form action="">

      </form>
    );
  }
}

AddMovie.prototype = { 
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;
