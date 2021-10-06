import React from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-movie-select" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="add-movie-select"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
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
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddMovieGenre;
