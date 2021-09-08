import React from 'react';
import PropTypes from 'prop-types';

import { storylineTestIds } from '../data';

const { labelId, inputId } = storylineTestIds;

class StorylineInput extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="storyline" data-testid={ labelId }>
        Sinopse:
        <textarea
          name="storyline"
          id="storyline"
          rows="3"
          value={ value }
          onChange={ handler }
          data-testid={ inputId }
          className="form-control"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
};

StorylineInput.defaultProps = {
  handler: () => undefined,
  value: '',
};

export default StorylineInput;
