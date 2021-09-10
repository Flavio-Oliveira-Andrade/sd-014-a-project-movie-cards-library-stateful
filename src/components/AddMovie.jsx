// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  /* constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  } */

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="subtitulo-input-label" htmlFor="subititulo">
          <input />
        </label>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
