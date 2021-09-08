import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, imagePathChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ imagePathChange }
        />
      </label>
    );
  }
}
ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imagePathChange: PropTypes.string.isRequired,
};

export default ImagePath;
