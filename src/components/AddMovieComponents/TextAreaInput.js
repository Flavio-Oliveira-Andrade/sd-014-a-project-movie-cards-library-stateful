import React from 'react';
import PropTypes from 'prop-types';

class TextAreaInput extends React.Component {
  render() {
    const { name, value, cb, lblName } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { lblName }
        <textarea
          id={ name }
          name={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ cb }
        />
      </label>
    );
  }
}

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  lblName: PropTypes.string.isRequired,
};

export default TextAreaInput;
