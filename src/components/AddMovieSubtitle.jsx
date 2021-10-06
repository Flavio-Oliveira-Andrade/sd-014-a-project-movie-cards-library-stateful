import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-movie-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="add-movie-subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieSubtitle;
