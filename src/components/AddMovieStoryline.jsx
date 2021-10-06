import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-movie-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="add-movie-storyline"
          cols="30"
          rows="10"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieStoryline;
