import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form2 extends Component {
  render() {
    const { imagePath, storyline, rating, handleChange } = this.props;
    return (
      <>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="number" data-testid="rating-input-label">
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

Form2.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form2;
