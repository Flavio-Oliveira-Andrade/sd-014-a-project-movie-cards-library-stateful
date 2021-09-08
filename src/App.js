import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends Component {

  // onClick = (event) => {
  //   event.preventDefault();
  //   };
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
