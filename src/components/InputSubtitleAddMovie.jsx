import React from 'react';
import propTypes from 'prop-types';

class InputSubtitleAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitleLabel" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

InputSubtitleAddMovie.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}.isRequired;

export default InputSubtitleAddMovie;
