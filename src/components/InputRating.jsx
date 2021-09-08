import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="n" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="n"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
          name="rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
