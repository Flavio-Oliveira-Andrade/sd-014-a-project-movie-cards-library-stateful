// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: '',
  genre: '',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = inicialState;
  }

  render() {
    const { onClick } = this.props;
    return (
      <div />
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
