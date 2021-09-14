import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = { value: PropTypes.string, onChange: PropTypes.func }.isRiquered;

export default Genero;
