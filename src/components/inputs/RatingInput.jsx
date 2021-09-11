import React from 'react';

class RatingInput extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          value={ rating }
          id="rating"
          type="number"
          data-testid="ranting-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default RatingInput;
