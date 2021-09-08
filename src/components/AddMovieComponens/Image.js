import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { image, imageChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ image }
          onChange={ imageChange }
        />
      </label>
    );
  }
}

export default Image;

Image.propTypes = {
  image: PropTypes.string.isRequired,
  imageChange: PropTypes.func.isRequired,
};
