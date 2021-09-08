import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo">
          Título:
          <input type="text" name="name" id="titulo" />
        </label>
        <label htmlFor="subtitulo">
          Subtítulo:
          <input type="text" name="name" id="subtitulo" />
        </label>
        <label htmlFor="imagem">
          Caminho da imagem:
          <input type="text" name="name" id="imagem" />
        </label>
        <label htmlFor="sinopse">
          Sinopse:
          <textarea htmlFor="sinopse" />
        </label>
        <label htmlFor="avaliacao">
          Avaliação:
          <input type="number" id="avaliacao" min="0" max="10" />
        </label>
        <label htmlFor="genero">
          Gênero:
          <select id="genero">
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
