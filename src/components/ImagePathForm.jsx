import React, { Component } from 'react';

class ImagePathForm extends Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
        />
      </label>
    );
  }
}

export default ImagePathForm;
