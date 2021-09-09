import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    return (
      <section>
        ola
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf('object').isRequired,
};

export default MovieLibrary;
