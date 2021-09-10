import React from 'react';

class RatingInput extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ rating: event.target.value });
  }

  render() {
    const { rating } = this.state;
    return (
      <label htmlFor data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default RatingInput;
