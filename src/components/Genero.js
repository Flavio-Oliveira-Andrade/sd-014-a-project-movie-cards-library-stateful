import React from 'react';

class Genero extends React.Component {
  render() {
    const { value, handleChange} = this.props;
    return (
      <label htmlFor data-testid="genre-input-label">
        Gênero
        <select
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genero;
