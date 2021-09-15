import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary />

    </div>
  );
}

export default App;
