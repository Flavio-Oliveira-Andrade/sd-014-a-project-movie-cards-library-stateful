import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label
        htmlFor="select"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="select"
          value={ genre }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
Select.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
