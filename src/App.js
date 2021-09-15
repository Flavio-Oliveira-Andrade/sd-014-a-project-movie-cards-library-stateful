import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import Rating from './components/Rating';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <AddMovie />
      <Rating />
    </div>
  );
}

export default App;
