import React from 'react';
import PropTypes from 'prop-types';

class TextareaInput extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          id="textarea"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextareaInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default TextareaInput;
