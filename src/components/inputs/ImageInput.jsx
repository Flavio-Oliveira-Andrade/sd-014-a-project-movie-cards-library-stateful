import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          id="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default ImagePath;
