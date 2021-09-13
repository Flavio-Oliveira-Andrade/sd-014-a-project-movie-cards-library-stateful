import React from 'react';

class InputGenre extends React.Component {
  render() {
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id=""
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default InputGenre;
