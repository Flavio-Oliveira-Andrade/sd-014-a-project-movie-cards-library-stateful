import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            type="text"
            name="genre"
            data-testid="genre-input"
            onChange={ handleChange }
            value={ genre }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>

        </label>
      </section>
    );
  }
}

InputGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGenre;
