import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
  }

  render() {
    return (
      <div> </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
