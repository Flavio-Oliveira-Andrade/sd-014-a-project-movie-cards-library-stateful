import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { name, handleChange,
      value, labelText, id } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${name}-input-label` }
      >
        { labelText }
        <textarea
          name={ name }
          value={ value }
          data-testid={ id }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
