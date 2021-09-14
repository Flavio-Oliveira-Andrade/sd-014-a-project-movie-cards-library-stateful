import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            onChange={ handleChange }
            value={ rating }
          />
        </label>
      </section>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
