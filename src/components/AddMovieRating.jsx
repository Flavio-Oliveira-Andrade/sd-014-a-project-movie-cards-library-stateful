import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { rating, handleChanceRating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChanceRating }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.number,
  handleChanceRating: PropTypes.func,
}.isRequired;

export default AddMovieRating;
