import React, { Component } from 'react';

class InputNumber extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="nota" data-testid="rating-input-label">
          Avaliação
          <input
            id="nota"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default InputNumber;
