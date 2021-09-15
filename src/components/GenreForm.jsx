import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genreForm"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default GenreForm;
