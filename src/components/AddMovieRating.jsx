import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="add-movie-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="add-movie-rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieRating;
