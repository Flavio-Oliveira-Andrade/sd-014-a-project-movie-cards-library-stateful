import React from 'react';
import PropTypes from 'prop-types';

class Story extends React.Component {
  render() {
    const { storyline, storyChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ storyChange }
        />
      </label>
    );
  }
}

export default Story;

Story.propTypes = {
  storyline: PropTypes.string.isRequired,
  storyChange: PropTypes.func.isRequired,
};
