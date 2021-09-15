import React from 'react';
import propTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          id="title-input"
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: propTypes.string,
  handleChange: propTypes.func,
}.isRequired;

export default AddMovieTitle;
