import React from 'react';

class SelectInput extends React.Component {
  render() {
    return (
      <label data-testid="select-input-label" htmlFor="selectedGenre">
        Filtrar por gênero
        <select data-testid="select-input" name="selectedGenre" id="selectedGenre">
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectInput;
