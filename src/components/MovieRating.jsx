import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const {
      value,
      handleOnChange,
    } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          name="rating"
          value={ value }
          onChange={ handleOnChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default MovieRating;
