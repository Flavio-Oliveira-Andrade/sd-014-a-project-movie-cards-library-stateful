import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;

// Este projeto foi desenvolvido na turma 11 com a colaboração dos colegas Islene, Khazad e outros colegas juntamente conosco nas salas de estudos.
