import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <section>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ value }
            onChange={ onChange }
          />
        </label>

      </section>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
