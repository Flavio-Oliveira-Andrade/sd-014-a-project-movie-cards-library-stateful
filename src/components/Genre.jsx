import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select-genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="select-genre"
          data-testid="select-input"
          name="genre"
          value={ value }
          onChange={ onChange }
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
