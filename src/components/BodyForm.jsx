import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BodyForm extends Component {
  render() {
    const { imagePath, storyline, handleChange } = this.props;
    return (
      <>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id=""
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

BodyForm.defaultProps = {
  imagePath: '',
  storyline: '',
  handleChange: () => {},
};

BodyForm.propTypes = {
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
};

export default BodyForm;
