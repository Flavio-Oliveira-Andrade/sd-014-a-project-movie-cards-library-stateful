import React, { Component } from 'react';

class SelectS extends Component {
  render() {
    return (
      <div>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="genre"
            data-testid="select-input"
            // value={ selectedGenre }
            // onChange={ onSelectedGenreChang }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectS;
