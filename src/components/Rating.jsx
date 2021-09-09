import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const { value, onChange } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            id="rating"
            name="rating"
            step="any"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number }.isRequired;

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;
