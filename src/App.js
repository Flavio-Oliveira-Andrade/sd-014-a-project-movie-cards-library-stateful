import React from 'react';
import Header from './components/Header';
import './App.css';

// Meus Imports:
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Requisito 01-05 */}
      <SearchBar />
      <AddMovie />
    </div>
  );
}

export default App;
