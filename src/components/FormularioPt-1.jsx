import React from 'react';
import PropTypes from 'prop-types';

class FormularioParte1 extends React.Component {
  render() {
    const { subtitleValue, titleValue, imagePathValue, storyValue,
      atualizaEstado } = this.props;
    return (
      <>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title"
            value={ titleValue }
            type="text"
            data-testid="title-input"
            onChange={ atualizaEstado }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitleValue }
            type="text"
            data-testid="subtitle-input"
            onChange={ atualizaEstado }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            name="imagePath"
            value={ imagePathValue }
            type="text"
            data-testid="image-input"
            onChange={ atualizaEstado }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            value={ storyValue }
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={ atualizaEstado }
          />
        </label>
      </>
    );
  }
}

FormularioParte1.propTypes = {
  subtitleValue: PropTypes.string.isRequired,
  titleValue: PropTypes.string.isRequired,
  imagePathValue: PropTypes.string.isRequired,
  storyValue: PropTypes.string.isRequired,
  atualizaEstado: PropTypes.func.isRequired,
};

export default FormularioParte1;
