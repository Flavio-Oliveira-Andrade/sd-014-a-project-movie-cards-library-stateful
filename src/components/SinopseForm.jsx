import React from 'react';
import PropTypes from 'prop-types';

class SinopseForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="textarea"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SinopseForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SinopseForm;
