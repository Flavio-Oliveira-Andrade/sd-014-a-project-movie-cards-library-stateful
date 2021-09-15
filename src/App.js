import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
