import React from 'react';
import PropTypes from 'prop-types';

class FormTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
          type="text"
          name="title"
          id="title"
        />
      </label>
    );
  }
}

FormTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormTitle;
