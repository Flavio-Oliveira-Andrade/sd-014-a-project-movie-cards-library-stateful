import React from 'react';
import PropTypes from 'prop-types';

class Seletor extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-selector">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
          name="genre"
          id="genre-selector"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Seletor.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Seletor;
