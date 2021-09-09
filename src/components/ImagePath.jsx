import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem:
        <input
          value={ value }
          type="text"
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          onChange={ onClick }
        />
      </label>
    );
  }
}

ImagePath.propTypes = ({
  value: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default ImagePath;
