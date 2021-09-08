import React from 'react';
import PropTypes from 'prop-types';

class InputSinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="ta" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          id="ta"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
          name="storyline"
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

InputSinopse.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSinopse;
