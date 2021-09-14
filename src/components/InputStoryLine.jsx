import React from 'react';
import PropTypes from 'prop-types';

class InputStoryLine extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            data-testid="storyline-input"
            onChange={ handleChange }
            value={ storyline }
          />
        </label>
      </section>
    );
  }
}

InputStoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryLine;
