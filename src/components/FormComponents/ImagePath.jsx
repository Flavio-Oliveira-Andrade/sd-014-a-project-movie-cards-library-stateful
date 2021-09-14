import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ImagePath extends Component {
  render() {
    const { imagePath, handdleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="textoInput">
        Imagem
        <input
          defaultValue={ imagePath }
          name="imagePath"
          data-testid="image-input"
          className="textoInput"
          type="text"
          onChange={ handdleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default ImagePath;
