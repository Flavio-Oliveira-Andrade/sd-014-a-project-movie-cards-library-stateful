import React from 'react';
import PropTypes from 'prop-types';

class InputImagem extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          value={ value }
          onChange={ onChange }
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }
}

InputImagem.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImagem;
