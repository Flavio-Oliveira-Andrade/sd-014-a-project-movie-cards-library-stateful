import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedSearchBar extends Component {
  render() {
    const { selectedGenre, handleChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero/label
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ handleChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" name="action" data-testid="select-option">Ação</option>
          <option
            value="comedy"
            name="comedy"
            data-testid="select-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            name="thriller"
            data-testid="select-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectedSearchBar.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectedSearchBar;
