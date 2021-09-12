import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="avaliacao"
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
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Avaliacao;
