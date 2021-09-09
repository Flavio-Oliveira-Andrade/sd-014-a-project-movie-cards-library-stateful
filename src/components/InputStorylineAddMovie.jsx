import React from 'react';
import propTypes from 'prop-types';

class InputStorylineAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storylineLabel" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStorylineAddMovie.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}.isRequired;

export default InputStorylineAddMovie;
