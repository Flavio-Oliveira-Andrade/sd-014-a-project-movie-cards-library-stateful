import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(state) {
    console.log(`App: ${Object.keys(state)}`);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie
          eventListener={ this.handleAdd }
        />
      </div>
    );
  }
}

export default App;
