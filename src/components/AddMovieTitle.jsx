import React from 'react';

class AddMovieTitle extends React.Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value="via title"
          // O input deve ter seu valor inicial provido pelo estado inicial do componente, via title;
          id="title-input"
          data-testid="title-input"
          onChange=""
          // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a title o atual título contido no input.
        />
      </label>
    );
  }
}

export default AddMovieTitle;
