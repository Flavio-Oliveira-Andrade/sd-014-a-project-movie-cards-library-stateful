import React from 'react';

class AddMovieGenre extends React.Component {
  render() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          value=""
          // O select deve ter seu valor inicial provido pelo estado inicial do componente, via genre;
          data-testid="genre-input"
          onChange=""
          // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a genre o gênero atual selecionado;
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default AddMovieGenre;
