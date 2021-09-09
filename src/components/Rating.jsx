import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <div>
        <label htmlFor="handle-change-rating" data-testid="rating-input-label">
          Avaliação
          <input
            value={ rating }
            type="number"
            name="rating"
            data-testid="rating-input"
            id="handle-change-rating"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.number.isRequired,
};

export default Rating;
