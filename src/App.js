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
      {/* Requisito 01 ao 05 */}
      <SearchBar />
      {/* Requisito 06 ao 14 */}
      <AddMovie />
    </div>
  );
}

export default App;
