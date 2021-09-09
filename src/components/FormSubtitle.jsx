import React from 'react';
import PropTypes from 'prop-types';

class FormSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          id="subtitle"
        />
      </label>
    );
  }
}

FormSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSubtitle;
