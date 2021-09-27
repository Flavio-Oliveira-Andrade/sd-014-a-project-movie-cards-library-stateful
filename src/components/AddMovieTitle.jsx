import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { title, handleChanceTitle } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ handleChanceTitle }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string,
  handleChanceTitle: PropTypes.func,
}.isRequired;

export default AddMovieTitle;
