import React from 'react';
import PropTypes from 'prop-types';

class Story extends React.Component {
  render() {
    const { story, storyChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ story }
          onChange={ storyChange }
        />
      </label>
    );
  }
}

export default Story;

Story.propTypes = {
  story: PropTypes.string.isRequired,
  storyChange: PropTypes.func.isRequired,
};
