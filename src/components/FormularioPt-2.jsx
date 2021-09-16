import React from 'react';
import PropTypes from 'prop-types';

class FormularioParte2 extends React.Component {
  render() {
    const { ratingValue, genreValue, atualizaEstado } = this.props;
    return (
      <>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating"
            value={ ratingValue }
            type="number"
            data-testid="rating-input"
            onChange={ atualizaEstado }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            onChange={ atualizaEstado }
            value={ genreValue }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </>
    );
  }
}

FormularioParte2.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  genreValue: PropTypes.string.isRequired,
  atualizaEstado: PropTypes.func.isRequired,
};

export default FormularioParte2;
