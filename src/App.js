import React from 'react';
import Header from './components/Header';
import './App.css';
import movies from './data';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
