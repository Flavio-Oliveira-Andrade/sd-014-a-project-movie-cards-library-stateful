import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleClick } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleClick }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  rating: PropTypes.number.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default Avaliacao;
