import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { genre, handleClick } = this.props;
    return (
      <label htmlFor="genero" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genero"
          value={ genre }
          onChange={ handleClick }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  genre: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
};

export default Genero;
