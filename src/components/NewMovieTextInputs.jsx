import React from 'react';
import PropTypes from 'prop-types';

class NewMovieTextInputs extends React.Component {
  render() {
    const { handler, values } = this.props;
    const [title, subtitle, imagePath] = values;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ handler }
            className="form-control"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handler }
            className="form-control"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handler }
            className="form-control"
          />
        </label>
      </>

    );
  }
}

NewMovieTextInputs.propTypes = {
  handler: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NewMovieTextInputs;
