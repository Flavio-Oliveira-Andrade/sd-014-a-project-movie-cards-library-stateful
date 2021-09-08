import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, handleOnChange } = this.props;
    return (
      <label htmlFor="input-imagem" data-testid="image-input-label">
        Imagem
        <input
          id="input-imagem"
          data-testid="image-input"
          value={ imagePath }
          name="imagePath"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Imagem;
