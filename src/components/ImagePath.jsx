import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, onClick } = this.props;
    return (
      <label htmlFor="ImagePath">
        ImagePath
        <input
          id="ImagePath"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ onClick }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onClick: onChange.func.isRequired,
};

export default ImagePath;
