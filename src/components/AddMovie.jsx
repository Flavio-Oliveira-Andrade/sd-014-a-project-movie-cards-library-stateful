// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default AddMovie;
