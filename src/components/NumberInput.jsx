/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
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

NumberInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRiquered;

export default NumberInput;
