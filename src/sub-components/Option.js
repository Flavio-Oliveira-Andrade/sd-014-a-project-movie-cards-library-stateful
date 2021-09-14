import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="byGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="byGenre"
            data-testid="select-input"
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="" selected>Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Option.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Option;
