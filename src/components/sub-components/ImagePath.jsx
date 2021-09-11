import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImagePath;
