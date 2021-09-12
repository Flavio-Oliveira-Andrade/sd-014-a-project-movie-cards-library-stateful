import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          name="imagePath"
          onChange={ handleChange }
          type="text"
          value={ imagePath }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieImage;
