import React from 'react';

class AddMovieImage extends React.Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input"
          // value="via imagePath"
          // O input deve ter seu valor inicial provido pelo estado inicial do componente, via imagePath;
          data-testid="image-input"
          // onChange=""
          // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a imagePath o atual caminho da imagem contido no input.
        />
      </label>
    );
  }
}

export default AddMovieImage;
