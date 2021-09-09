import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (

      <label htmlFor="add-movie-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="add-movie-title"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;
