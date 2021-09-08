import React from 'react';
import PropTypes from 'prop-types';

class InputImagem extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="i" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="i"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
          name="imagePath"
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
