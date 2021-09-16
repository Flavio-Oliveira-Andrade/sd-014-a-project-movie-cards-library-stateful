import React from 'react';
import PropTypes from 'prop-types';

// Aprendi com Jéssica grunewald e Yasmin
// fragmento de componente do code review do Fernando Oliveira
// https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/19/files
class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          step="any"
          value={ value }
          onChange={ onChange }
        />
      </label>

    );
  }
}
export default RatingInput;

RatingInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;
