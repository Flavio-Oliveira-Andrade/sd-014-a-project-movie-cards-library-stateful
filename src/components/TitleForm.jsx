import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.string,
}.isRequired;

export default TitleForm;
