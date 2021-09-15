import React from 'react';
import propTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating-input"
          defaultValue="0"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: propTypes.number,
  handleChange: propTypes.func,
}.isRequired;

export default AddMovieRating;
