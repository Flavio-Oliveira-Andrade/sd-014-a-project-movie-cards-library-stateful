import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    </div>
  );
}

export default App;
