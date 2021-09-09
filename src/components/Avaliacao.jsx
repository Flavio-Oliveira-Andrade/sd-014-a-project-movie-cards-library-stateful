import React from 'react';
import PropTypes from 'prop-types';

class Avaliação extends React.Component {
  render() {
    const { rating, update } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ update }
        />
      </label>
    );
  }
}

Avaliação.propTypes = {
  rating: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default Avaliação;
