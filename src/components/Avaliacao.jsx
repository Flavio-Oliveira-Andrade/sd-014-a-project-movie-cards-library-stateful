import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  rating: 0,
};

class Avaliacao extends Component {
  constructor() {
    super();
    this.state = inicialState;
  }

  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Avaliacao;
