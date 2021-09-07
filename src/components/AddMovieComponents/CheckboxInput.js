import React from 'react';
import PropTypes from 'prop-types';

class CheckboxInput extends React.Component {
  render() {
    const { name, checked, cb, lblName } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { lblName }
        <input
          id={ name }
          name={ name }
          data-testid={ `${name}-input` }
          type="checkbox"
          checked={ checked }
          onChange={ cb }
        />
      </label>
    );
  }
}

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  cb: PropTypes.func.isRequired,
  lblName: PropTypes.string.isRequired,
};

export default CheckboxInput;
