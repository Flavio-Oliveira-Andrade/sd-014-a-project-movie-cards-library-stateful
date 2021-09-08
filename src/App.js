import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import movies from './data';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar onClick={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default App;
