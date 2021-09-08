import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="t" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="t"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
