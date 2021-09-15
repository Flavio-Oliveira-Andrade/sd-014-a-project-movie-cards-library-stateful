import React from 'react';
import propTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="image-input"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: propTypes.string,
  handleChange: propTypes.func,
}.isRequired;

export default AddMovieImage;
