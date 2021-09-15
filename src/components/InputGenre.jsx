import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <section>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ value }
            onChange={ onChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

InputGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGenre;
