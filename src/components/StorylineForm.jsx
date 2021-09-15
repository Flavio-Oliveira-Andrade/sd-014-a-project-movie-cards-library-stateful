import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          data-testid="storyline-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StorylineForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isREquired;

export default StorylineForm;
