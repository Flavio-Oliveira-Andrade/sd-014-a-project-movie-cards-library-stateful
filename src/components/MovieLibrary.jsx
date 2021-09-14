import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        teste
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
