import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default SubtitleForm;
