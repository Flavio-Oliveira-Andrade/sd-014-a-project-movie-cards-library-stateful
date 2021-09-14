import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          id="rating"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = { value: PropTypes.number, onChange: PropTypes.func }.isRiquered;

export default RatingInput;
