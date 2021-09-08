import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const {
      value,
      handleOnChange,
    } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          value={ value }
          onChange={ handleOnChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default ImagePath;
