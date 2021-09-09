import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero:
        <select
          value={ value }
          name="genre"
          id="genre"
          data-testid="genre-input"
          onChange={ onClick }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = ({
  value: PropTypes.string,
  onClick: PropTypes.func,
}).isRequired;

export default Genre;
