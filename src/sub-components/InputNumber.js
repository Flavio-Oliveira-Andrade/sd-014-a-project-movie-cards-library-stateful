import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="nota" data-testid="rating-input-label">
          Avaliação
          <input
            id="nota"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputNumber;
