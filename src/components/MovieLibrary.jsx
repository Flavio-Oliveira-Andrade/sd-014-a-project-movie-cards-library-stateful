// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    console.log(this.props, 'Xablau');
    const { movies } = this.props;
    return (
      <div>
        <h2>A</h2>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
