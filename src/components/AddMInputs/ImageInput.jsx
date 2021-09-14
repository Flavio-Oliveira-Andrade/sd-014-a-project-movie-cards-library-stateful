import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          id="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImagePath;
