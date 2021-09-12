import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          onChange={ onChange }
          name="storyline"
          id="storylyne"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputStoryline;
