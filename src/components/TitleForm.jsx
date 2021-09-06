import React from 'react';
import PropTypes from 'prop-types';

class TitleForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          id="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleForm;
