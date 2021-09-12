import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          name="title"
          onChange={ handleChange }
          type="text"
          value={ title }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieTitle;
