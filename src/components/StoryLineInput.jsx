import React from 'react';
import PropTypes from 'prop-types';

class StoryLineInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          name="storyline"
          id="storyline"
          rows="3"
          value={ value }
          onChange={ handler }
          data-testid="storyline-input"
          className="form-control"
        />
      </label>
    );
  }
}

StoryLineInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
};

StoryLineInput.defaultProps = {
  handler: () => undefined,
  value: '',
};

export default StoryLineInput;
