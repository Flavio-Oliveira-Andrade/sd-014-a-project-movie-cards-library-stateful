import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreFilterS extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="select-genre"
            data-testid="select-input"
            value={ value }
            onChange={ onChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

GenreFilterS.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default GenreFilterS;
