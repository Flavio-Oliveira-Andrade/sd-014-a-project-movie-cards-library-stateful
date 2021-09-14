import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="image"
            data-testid="image-input"
            onChange={ handleChange }
            value={ imagePath }
          />
        </label>
      </section>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
