import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ value }
          onChange={ onChange }
          data-testid="select-input"
          id="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
