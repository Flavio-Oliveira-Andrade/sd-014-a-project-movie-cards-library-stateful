import React, { Component } from 'react';

class ImageInputA extends Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input data-testid="image-input" name="image" />
      </label>
    );
  }
}

export default ImageInputA;
