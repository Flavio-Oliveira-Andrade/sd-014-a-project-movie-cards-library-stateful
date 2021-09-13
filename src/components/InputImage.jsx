import React from 'react';

class InputImage extends React.Component {
  render() {
    return (
      <label htmlFor="text" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default InputImage;
