// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        { movies }
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
