import React, { Component } from 'react';

class InputOtherInfos extends Component {
  render() {
    const {
      props: { imagePath, storyline, rating, onHandleChange },
    } = this;
    return (
      <>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image"
            value={ imagePath }
            data-testid="image-input"
            onChange={ onHandleChange }
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="sinopse"
            value={ storyline }
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ onHandleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ onHandleChange }
          />
        </label>
      </>
    );
  }
}

export default InputOtherInfos;
