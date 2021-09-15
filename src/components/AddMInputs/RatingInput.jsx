import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          value={ rating }
          id="rating"
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingInput;
