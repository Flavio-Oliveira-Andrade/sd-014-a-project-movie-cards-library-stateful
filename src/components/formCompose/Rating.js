import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input-rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ rating }
          id="input-rating"
        />
        { rating }
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
