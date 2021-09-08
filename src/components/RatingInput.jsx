import React from 'react';
import PropTypes from 'prop-types';

import { ratingInputTestIds } from '../data';

const { labelId, inputId } = ratingInputTestIds;

class RatingInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="rating" data-testid={ labelId }>
        Avaliação:
        <input
          type="number"
          min="0"
          step="0.1"
          name="rating"
          id="rating"
          value={ value }
          onChange={ handler }
          data-testid={ inputId }
          className="form-control"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.number,
};

RatingInput.defaultProps = {
  value: 0,
};

export default RatingInput;
