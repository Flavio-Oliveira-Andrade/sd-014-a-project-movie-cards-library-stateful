import React from 'react';

class GenreInput extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default GenreInput;
