import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieForm extends Component {
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
        <label htmlFor="subtitle-Input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitleValue }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="title-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePathValue }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storylineValue }
            cols="30"
            rows="10"
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
      </>
    );
  }
}

MovieForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  titleValue: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
  storylineValue: PropTypes.string.isRequired,
};

export default MovieForm;
