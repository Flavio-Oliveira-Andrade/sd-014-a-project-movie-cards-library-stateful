import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (

      <label htmlFor="add-movie-imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="add-movie-imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>

    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default ImagePath;
