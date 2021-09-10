import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </main>
    );
  }
}

export default App;
