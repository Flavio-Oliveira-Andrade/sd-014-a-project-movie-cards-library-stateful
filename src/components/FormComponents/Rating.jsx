import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, handdleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="true">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          onChange={ handdleChange }
          defaultValue={ rating }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Rating;
