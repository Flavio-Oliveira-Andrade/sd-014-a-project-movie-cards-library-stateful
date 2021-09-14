import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, handleClick } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="image"
          alt="imagem do filme"
          value={ imagePath }
          onChange={ handleClick }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default Imagem;
