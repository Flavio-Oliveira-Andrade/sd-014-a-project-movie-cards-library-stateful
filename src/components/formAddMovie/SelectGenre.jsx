import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { inputGenre, handleChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="selectGenreAddMovie">
          Gênero
          <select
            name="inputGenre"
            id="selectGenreAddMovie"
            data-testid="genre-input"
            value={ inputGenre }
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectGenre.propTypes = {
  inputGenre: PropTypes.string,
  handleChange: PropTypes.func,
};

SelectGenre.defaultProps = {
  inputGenre: 'action',
  handleChange: () => {},
};

export default SelectGenre;
