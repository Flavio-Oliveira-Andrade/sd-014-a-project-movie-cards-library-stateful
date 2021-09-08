import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          value={ value }
          data-testid="image-input"
          name="imagePath"
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
