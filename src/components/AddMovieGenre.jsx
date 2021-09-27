import React from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends React.Component {
  render() {
    const { genre, handleChanceGenre } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChanceGenre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  genre: PropTypes.string,
  handleChanceGenre: PropTypes.func,
}.isRequired;

export default AddMovieGenre;
