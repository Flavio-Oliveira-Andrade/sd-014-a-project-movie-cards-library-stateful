import React from 'react';

class ImagePath extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="handle-change-image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
            id="handle-change-image"
          />
        </label>
      </div>
    );
  }
}

export default ImagePath;
