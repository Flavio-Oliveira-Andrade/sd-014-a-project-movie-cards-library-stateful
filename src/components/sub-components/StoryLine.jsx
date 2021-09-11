import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="story">
        Sinopse
        <textarea
          name="storyLine"
          id="story"
          cols="30"
          rows="10"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default StoryLine;
