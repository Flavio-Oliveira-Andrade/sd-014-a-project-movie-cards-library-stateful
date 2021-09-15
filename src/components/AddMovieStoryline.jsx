import React from 'react';
import propTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          cols="30"
          rows="10"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  storyline: propTypes.string,
  handleChange: propTypes.func,
}.isRequired;

export default AddMovieStoryline;
