import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalData extends Component {
  render() {
    const { titleValue, subtitleValue, imagePathValue,
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
      </>
    );
  }
}

PersonalData.propTypes = {
  handleChange: PropTypes.func.isRequired,
  titleValue: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
};

export default PersonalData;
