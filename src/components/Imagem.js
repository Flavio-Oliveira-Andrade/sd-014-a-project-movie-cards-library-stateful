import React from 'react';

class Imagem extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor data-testid="image-input-label">
        Imagem
        <input
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Imagem;
