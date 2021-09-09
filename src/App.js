import React from 'react';
import Header from './components/Header';
import MoviesLibrary from './components/MovieLibrary';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesLibrary movies={ data } />
    </div>
  );
}

export default App;
