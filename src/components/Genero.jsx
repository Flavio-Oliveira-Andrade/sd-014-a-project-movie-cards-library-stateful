import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genero extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="genre-input-label">
        Gênero
        <select
          id="avaliacao"
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

      </label>
    );
  }
}
Genero.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Genero;
