// import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

import data from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data }/>
      <MovieList movies={ data } />
    </div>
  );
}

export default App;