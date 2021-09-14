import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { title, handleChange, customize, text } = this.props;
    return (
      <div>
        <label htmlFor={ customize } data-testid={ `${customize}-input-label` }>
          { text }
          <input
            id={ customize }
            name={ customize }
            data-testid={ `${customize}-input` }
            type="text"
            value={ title }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  customize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Input;
