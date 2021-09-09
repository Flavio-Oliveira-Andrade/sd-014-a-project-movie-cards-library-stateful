import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BodyForm extends Component {
  render() {
    const { imagePath, storyline } = this.props;
    return (
      <>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange
          />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange
          />
        </label>
      </>
    );
  }
}

BodyForm.defaultProps = {
  imagePath: '',
  storyline: '',
};

BodyForm.propTypes = {
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
};

export default BodyForm;
