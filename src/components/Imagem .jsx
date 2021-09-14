import React from 'react';

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

export default Imagem;
