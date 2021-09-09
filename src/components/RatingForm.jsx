import React, { Component } from 'react';

class RatingForm extends Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
        />
      </label>
    );
  }
}

export default RatingForm;
