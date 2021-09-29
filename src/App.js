import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import catalog from './data';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ catalog } />
    </div>
  );
}

export default App;
