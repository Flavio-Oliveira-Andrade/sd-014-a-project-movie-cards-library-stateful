import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterForm extends Component {
  render() {
    const { rating, genre } = this.props;
    return (
      <>
        <label htmlFor="avaliacao" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ rating } data-testid="rating-input" />
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select name="" id="" value={ genre } data-testid="genre-input">
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </>
    );
  }
}

FooterForm.defaultProps = {
  rating: 0,
  genre: 'action',
};

FooterForm.propTypes = {
  rating: PropTypes.number,
  genre: PropTypes.string,
};

export default FooterForm;
