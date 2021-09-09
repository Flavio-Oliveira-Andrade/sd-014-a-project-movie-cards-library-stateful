import React from 'react';
import PropTypes from 'prop-types';

class FormStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
          type="textarea"
          name="storyline"
          id="storyline"
        />
      </label>
    );
  }
}

FormStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormStoryline;
