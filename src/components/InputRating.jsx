import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <section>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ value }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
