import React from 'react';
import Header from './components/Header';
import './App.css';

// Meus Imports:
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Requisito 01-05 */}
      <SearchBar />
    </div>
  );
}

export default App;
