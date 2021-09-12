import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          id="subtitle"
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default Subtitle;
