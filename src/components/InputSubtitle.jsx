import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="s" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="s"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
