import React from 'react';
import PropTypes from 'prop-types';

class SubtitleForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          id="subtitle"
          name="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleForm;
