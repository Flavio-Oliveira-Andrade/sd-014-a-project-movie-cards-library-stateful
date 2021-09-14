import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
        { rating }
      </label>
    );
  }
}

export default Rating;
