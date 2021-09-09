import React from 'react';

class Genre extends React.Component {
  render() {
    return (
      <label htmlFor="handle-change-genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          onChange={ this.handleChange }
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

export default Genre;
