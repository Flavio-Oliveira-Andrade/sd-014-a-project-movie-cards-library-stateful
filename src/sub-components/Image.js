import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { title, handleChange, customize, text, name } = this.props;
    return (
      <div>
        <label htmlFor={ customize } data-testid={ `${customize}-input-label` }>
          { text }
          <input
            id={ customize }
            name={ name }
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

Image.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  customize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Image;
