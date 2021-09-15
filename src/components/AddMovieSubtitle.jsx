import React from 'react';

class AddMovieSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input"
          // value="via subtitle"
          // O input deve ter seu valor inicial provido pelo estado inicial do componente, via subtitle;
          data-testid="subtitle-input"
          // onChange=""
          // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a subtitle o atual subtítulo contido no input.
        />
      </label>
    );
  }
}

export default AddMovieSubtitle;
