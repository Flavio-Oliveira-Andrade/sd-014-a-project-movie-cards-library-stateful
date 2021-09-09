import React, { Component } from 'react';

class ImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (

      <label htmlFor="add-movie-imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="add-movie-imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>

    );
  }
}

export default ImagePath;
