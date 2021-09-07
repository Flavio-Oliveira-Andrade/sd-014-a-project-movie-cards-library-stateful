import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
