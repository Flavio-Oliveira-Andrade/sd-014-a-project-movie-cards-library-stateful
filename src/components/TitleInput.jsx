import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title">
        Titulo
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

TitleInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TitleInput;
