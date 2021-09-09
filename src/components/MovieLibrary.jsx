import React from 'react';

class MovieLibrary extends React.Component {
  render() {
    return (
      <h1>oi</h1>
    );
  }
}

// O componente <MovieLibrary /> possui como estado as seguintes propriedades:

// searchText: guarda o texto de busca por filmes;
// bookmarkedOnly: um boolean que guarda se é para filtrar por filmes favoritados ou não;
// selectedGenre: guarda o gênero do filme selecionado para poder fazer a filtragem;
// movies: guarda a lista de filmes.
// Ou seja, o estado de <MovieLibrary /> contém a lista de filmes e os filtros a serem aplicados sobre a listagem.

// O estado inicial do componente <MovieLibrary /> deve ser:

// searchText: '';
// bookmarkedOnly: false;
// selectedGenre: '';
// movies: a lista de filmes passadas pela props movies.

export default MovieLibrary;
