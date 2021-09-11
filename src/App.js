import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';

class App extends React.Component {



  render() {
  return (
    <div className="App">
      <Header />
      <MovieList movies = { movies }/>
      <SearchBar/>
    </div>
  );
}
}



export default App;
