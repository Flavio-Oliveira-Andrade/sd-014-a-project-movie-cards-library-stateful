import React from 'react';
import PropTypes from 'prop-types';

class FormImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
          type="text"
          name="image"
          id="image"
        />
      </label>
    );
  }
}

FormImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormImage;
