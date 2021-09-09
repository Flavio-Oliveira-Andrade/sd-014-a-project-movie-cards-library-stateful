import React, { Component } from 'react'

class Storyline extends Component {
  render() {
    const { value, handleChange} = this.props;
    return (


      <label htmlFor="add-movie-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="add-movie-storyline"
          cols="30"
          rows="10"
          value={value}
          data-testid="storyline-input"
          onChange={handleChange}
        ></textarea>
      </label>

    )
  }
}

export default Storyline;