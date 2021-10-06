import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-movie-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="add-movie-title"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieTitle;
