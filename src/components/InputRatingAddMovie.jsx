import React from 'react';
import propTypes from 'prop-types';

class InputRatingAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="ratingLabel" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputRatingAddMovie.propTypes = {
  value: propTypes.number,
  onChange: propTypes.func,
}.isRequired;

export default InputRatingAddMovie;
