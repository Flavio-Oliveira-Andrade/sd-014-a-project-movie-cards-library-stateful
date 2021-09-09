import React from 'react';
import propTypes from 'prop-types';

class InputTitleAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="titleLabel" data-testid="title-input-label">
        Título:
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputTitleAddMovie.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}.isRequired;

export default InputTitleAddMovie;
