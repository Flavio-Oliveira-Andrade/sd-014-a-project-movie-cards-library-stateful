import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends Component {
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

AddMovieImage.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieImage;
