import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, ratingChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ ratingChange }
          data-testid="rating-input"
        />
      </label>

    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingChange: PropTypes.number.isRequired,
};

export default Rating;
