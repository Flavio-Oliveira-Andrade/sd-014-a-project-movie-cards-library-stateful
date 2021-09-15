import React from 'react';

class AddMovieRating extends React.Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          // value="via rating"
          // O input deve ter seu valor inicial provido pelo estado inicial do componente, via rating;
          data-testid="rating-input"
          // onChange=""
          // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a rating a avaliação atual continda no input.
        />
      </label>
    );
  }
}

export default AddMovieRating;
