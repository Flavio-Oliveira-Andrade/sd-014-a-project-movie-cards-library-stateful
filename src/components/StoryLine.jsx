import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            cols="30"
            rows="10"
            value={ value }
            data-testid="storyline-input"
            onChange={ onChange }
            name="storyline"
          />
        </label>
      </div>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLine;
