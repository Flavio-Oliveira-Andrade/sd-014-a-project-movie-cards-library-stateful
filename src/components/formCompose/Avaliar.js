import React from 'react';
import PropTypes from 'prop-types';

class Avaliar extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input-rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ handleChange }
          name="rating"
        />
        { rating }
      </label>
    );
  }
}

Avaliar.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired };

export default Avaliar;
