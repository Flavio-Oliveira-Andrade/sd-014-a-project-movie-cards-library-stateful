import React from 'react';

class Rating extends React.Component {
  render(){
    const { handleChange, value } = this.props;
    return(
      <label data-testid="rating-input-label" htmlFor="rati">
      Avaliação
      <input
        type="number"
        data-testid="rating-input"
        name="rating"
        id="rati"
        onChange={ handleChange }
        value={ value }
      />
    </label>
    )
  }
}

export default Rating;