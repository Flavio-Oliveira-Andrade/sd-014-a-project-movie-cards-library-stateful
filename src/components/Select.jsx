import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { onSelectedGenreChange, value } = this.props;
    return (
      <label htmlFor="select-gender" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="select-genre"
          onChange={ onSelectedGenreChange }
          value={ value }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">
            Todos
          </option>
          <option data-testid="select-option" value="action">
            Ação
          </option>
          <option data-testid="select-option" value="comedy">
            Comédia
          </option>
          <option data-testid="select-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  onSelectedGenreChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
