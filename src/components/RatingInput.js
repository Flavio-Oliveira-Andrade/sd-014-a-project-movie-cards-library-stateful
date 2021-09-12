import React from 'react';

class RatingInput extends React.Component {
  render() {
    const { value, handleChange} = this.props;
    return (
      <label htmlFor data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ value}
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default RatingInput;
