import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { imagePath, handleChanceImagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChanceImagePath }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: PropTypes.string,
  handleChanceImagePath: PropTypes.func,
}.isRequired;

export default AddMovieImage;
