import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { storyline, handleChange, customize } = this.props;
    return (
      <div>
        <label htmlFor={ customize } data-testid={ `${customize}-input-label` }>
          Sinopse
          <textarea
            id={ customize }
            name={ customize }
            data-testid={ `${customize}-input` }
            type="text"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  customize: PropTypes.string.isRequired,
};

export default TextArea;
