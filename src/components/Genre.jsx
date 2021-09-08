import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const {
      value,
      handleOnChange,
    } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gêneros
        <select
          id="genre"
          name="genre"
          value={ value }
          onChange={ handleOnChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Genre;
