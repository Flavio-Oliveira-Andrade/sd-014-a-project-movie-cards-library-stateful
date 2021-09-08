import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ value }
          type="text"
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
