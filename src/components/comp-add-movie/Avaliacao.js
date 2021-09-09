import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleOnChange } = this.props;
    return (
      <label htmlFor="input-avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="input-avaliacao"
          value={ rating }
          data-testid="rating-input"
          name="rating"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Avaliacao;
