import React from 'react';
import PropTypes from 'prop-types';

class FormGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ value }
          onChange={ onChange }
          data-testid="genre-input"
          name="genre"
          id="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

FormGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormGenre;
