import React from 'react';
import PropTypes from 'prop-types';

class FormFirstPart extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;
    return (
      <>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ handleChange }
            type="text"
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            type="text"
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
      </>
    );
  }
}

FormFirstPart.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormFirstPart;
