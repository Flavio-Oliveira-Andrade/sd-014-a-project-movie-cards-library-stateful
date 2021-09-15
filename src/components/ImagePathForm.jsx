import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePathForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePathForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default ImagePathForm;
