import React from 'react';
import PropTypes from 'prop-types';

class TextareaStoryline extends React.Component {
  render() {
    const { textareaStoryline, handleChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="textareaStoryline">
          Sinopse
          <textarea
            name="textareaStoryline"
            id="textareaStoryline"
            data-testid="storyline-input"
            value={ textareaStoryline }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

TextareaStoryline.propTypes = {
  textareaStoryline: PropTypes.string,
  handleChange: PropTypes.func,
};

TextareaStoryline.defaultProps = {
  textareaStoryline: '',
  handleChange: () => {},
};

export default TextareaStoryline;
