import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="input-storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="input-storyline"
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputStoryline;
