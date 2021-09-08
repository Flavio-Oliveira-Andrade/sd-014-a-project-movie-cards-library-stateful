import React from 'react';
import PropTypes from 'prop-types';

class NewMovieRating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

NewMovieRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NewMovieRating;
