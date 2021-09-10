import React from 'react';

import Header from './pages/Header';
import MovieLibrary from './pages/MovieLibrary';

import './App.css';
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
