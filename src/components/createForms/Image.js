import React from 'react';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
        />
        { imagePath }
      </label>
    );
  }
}

export default Image;
