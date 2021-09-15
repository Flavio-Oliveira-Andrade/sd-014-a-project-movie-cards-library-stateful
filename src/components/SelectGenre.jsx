import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  genre: '',
};

class SelectGenre extends Component {
  constructor() {
    super();
    this.state = inicialState;
  }

  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          onChange={ handleChange }
          value={ value }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default SelectGenre;
