import React from 'react';
import propTypes from 'prop-types';

class InputImgAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imgLabel" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

InputImgAddMovie.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}.isRequired;

export default InputImgAddMovie;
