import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
