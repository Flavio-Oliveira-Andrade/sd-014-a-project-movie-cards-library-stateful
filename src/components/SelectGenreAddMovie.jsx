import React from 'react';
import propTypes from 'prop-types';

class SelectGenreAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genreLabel" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectGenreAddMovie.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
}.isRequired;

export default SelectGenreAddMovie;
