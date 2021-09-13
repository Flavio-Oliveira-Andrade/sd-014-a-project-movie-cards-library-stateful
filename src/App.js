import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import data from './data';
import MovieLibrary from './components/MovieLibrary';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieLibrary movies={ data } />
    </div>
  );
}
export default App;
