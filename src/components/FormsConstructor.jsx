import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsConstructor extends Component {
  render() {
    const { nome, load } = this.props;

    if (nome[0] === 'genre') {
      return (
        <label htmlFor={ nome[0] } data-testid="genre-input-label">
          Gênero
          <select
            value={ nome[2] }
            name={ nome[0] }
            data-testid="genre-input"
            onChange={ load }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      );
    }

    return (
      <label htmlFor={ nome[0] } data-testid={ `${nome[0]}-input-label` }>
        {nome[1]}
        <input
          type="text"
          value={ nome[2] }
          name={ nome[0] }
          data-testid={ `${nome[0]}-input` }
          onChange={ load }
        />
      </label>
    );
  }
}
FormsConstructor.propTypes = {
  nome: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  load: PropTypes.func.isRequired,
};

export default FormsConstructor;
