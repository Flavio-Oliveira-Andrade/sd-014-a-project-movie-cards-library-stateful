import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <label htmlFor="handle-change-genre" data-testid="genre-input-label">
        Gênero
        <select
          value={ value }
          name="genre"
          data-testid="genre-input"
          onChange={ onChange }
          id="handle-change-genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Genre;
