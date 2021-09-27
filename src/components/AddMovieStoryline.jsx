import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { storyline, handleChanceStoryline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ handleChanceStoryline }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  storyline: PropTypes.string,
  handleChanceStoryline: PropTypes.func,
}.isRequired;

export default AddMovieStoryline;
