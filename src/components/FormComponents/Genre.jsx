import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { genre, handdleChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="true">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          defaultValue={ genre }
          onChange={ handdleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Genre;
