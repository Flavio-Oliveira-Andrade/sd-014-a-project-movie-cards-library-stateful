import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="input-subtitle"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default InputSubtitle;
