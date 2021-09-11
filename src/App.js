import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import SearchBar from './components/AddMovie';

class App extends React.Component {



  render() {
  return (
    <div className="App">
      <Header />
      <MovieList movies = { movies }/>
      <SearchBar/>
      <AddMovie/>
    </div>
  );
}
}



export default App;
