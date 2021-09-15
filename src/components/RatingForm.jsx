import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default RatingForm;
