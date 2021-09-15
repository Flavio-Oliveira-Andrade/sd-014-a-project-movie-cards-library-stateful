import React from 'react';

class AddMovieStoryline extends React.Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          cols="30"
          rows="10"
          // value="via storyline"
          // A textarea deve ter seu valor inicial provido pelo estado inicial do componente, via storyline
          data-testid="storyline-input"
          // onChange=""
          // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a storyline a sinopse atual continda na textarea.
        />
      </label>
    );
  }
}

export default AddMovieStoryline;
