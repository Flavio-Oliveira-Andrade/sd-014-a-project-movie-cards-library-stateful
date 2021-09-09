import React, { Component } from 'react';

class Form2 extends Component {
  render() {
    const { imagePath, storyline, rating, handleChange } = this.props;
    return (
      <>
        <label data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

export default Form2;