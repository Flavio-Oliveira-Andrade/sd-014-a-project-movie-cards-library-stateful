import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Imagem extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          id="imagem"
          type="imagem"
          name="imagem"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Imagem.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Imagem;
