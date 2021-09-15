// import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

import data from './data';

import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
