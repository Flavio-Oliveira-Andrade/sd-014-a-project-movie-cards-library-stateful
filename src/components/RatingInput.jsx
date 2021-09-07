import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          min="0"
          step="0.1"
          name="rating"
          id="rating"
          value={ value }
          onChange={ handler }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
};

RatingInput.defaultProps = {
  handler: () => undefined,
  value: '0',
};

export default RatingInput;
