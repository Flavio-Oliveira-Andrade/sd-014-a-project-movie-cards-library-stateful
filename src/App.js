import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';

import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary filmes={ movies } />
    </div>
  );
}

export default App;
