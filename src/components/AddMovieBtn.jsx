import React from 'react';

class AddMovieBtn extends React.Component {
  render() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick=""
        // A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />, que: Executa a callback passada para o componente <AddMovie /> via props, chamada onClick, que recebe como parâmetro o estado atual de <AddMovie />; Reseta o estado de <AddMovie />, voltando para o inicial, conforme mencionado anteriormente.
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieBtn;
