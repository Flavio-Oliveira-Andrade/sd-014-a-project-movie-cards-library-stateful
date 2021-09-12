import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          name="rating"
          onChange={ handleChange }
          type="number"
          value={ rating }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieRating;
