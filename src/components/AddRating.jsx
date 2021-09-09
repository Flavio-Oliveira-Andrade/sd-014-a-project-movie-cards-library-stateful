import React, { Component } from 'react'

class AddRating extends Component {
  render() {
    const { value, handleChange} = this.props;
    return (
      <label htmlFor="add-movie-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="add-movie-rating"
          value={value}
          data-testid="rating-input"
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default AddRating;
