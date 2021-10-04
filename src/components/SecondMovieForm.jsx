import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SecondMovieForm extends Component {
  render() {
    const { ratingValue, genreValue, handleChange } = this.props;
    return (
      <>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ ratingValue }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genreValue }
            name="genre"
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option
              value="action"
              data-testid="genre-option"
            >
              Ação
            </option>
            <option
              value="comedy"
              data-testid="genre-option"
            >
              Comédia
            </option>
            <option
              value="thriller"
              data-testid="genre-option"
            >
              Suspense
            </option>
          </select>
        </label>
      </>
    );
  }
}

SecondMovieForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  ratingValue: PropTypes.number.isRequired,
  genreValue: PropTypes.string.isRequired,
};

export default SecondMovieForm;
