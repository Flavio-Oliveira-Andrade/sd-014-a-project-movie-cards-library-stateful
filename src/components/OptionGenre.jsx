import React from 'react';
import PropTypes from 'prop-types';

class OptionGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select-genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          id="select-genre"
          name="selectedGenre"
          value={ value }
          onChange={ onChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

OptionGenre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default OptionGenre;