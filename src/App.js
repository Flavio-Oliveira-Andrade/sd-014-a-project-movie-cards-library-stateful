import React from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      {/* <SearchBar />
      <AddMovie /> */}
    </div>
  );
}

export default App;
