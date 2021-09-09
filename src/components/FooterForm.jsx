import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterForm extends Component {
  render() {
    const { rating, genre, handleChange } = this.props;
    return (
      <>
        <label htmlFor="avaliacao" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id=""
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option
              name="action"
              value="action"
              data-testid="genre-option"
            >
              Ação
            </option>
            <option
              name="comedy"
              value="comedy"
              data-testid="genre-option"
            >
              Comédia
            </option>
            <option
              name="thriller"
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

FooterForm.defaultProps = {
  rating: 0,
  genre: 'action',
  handleChange: () => {},
};

FooterForm.propTypes = {
  rating: PropTypes.number,
  genre: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FooterForm;
