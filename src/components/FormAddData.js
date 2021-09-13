import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormAddData extends Component {
  render() {
    const { titleValue, subtitleValue, imagePathValue, storylineValue,
      handleChange } = this.props;
    return (
      <>
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ titleValue }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitleValue }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePathValue }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storylineValue }
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

FormAddData.propTypes = {
  handleChange: PropTypes.func.isRequired,
  titleValue: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
  storylineValue: PropTypes.string.isRequired,
};

export default FormAddData;
