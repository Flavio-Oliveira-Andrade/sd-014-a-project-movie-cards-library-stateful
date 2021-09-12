import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem:
        <input
          data-testid="image-input"
          id="image"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Image.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default Image;