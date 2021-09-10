import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação:
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
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRiquered;

export default RatingInput;
