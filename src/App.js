import React from 'react';
import Header from './components/Header';
import Movielibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielibrary movies={ movies } />
    </div>
  );
}

export default App;
