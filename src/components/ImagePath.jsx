import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <div>
        <label htmlFor="handle-change-image" data-testid="image-input-label">
          Imagem
          <input
            value={ value }
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={ onChange }
            id="handle-change-image"
          />
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImagePath;
