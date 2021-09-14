import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select
            id="genero"
            name="genre"
            data-testid="genre-input"
            value={ genre }
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

export default Select;
