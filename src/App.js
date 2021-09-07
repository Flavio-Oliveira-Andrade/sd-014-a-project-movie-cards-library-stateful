import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    console.log(`App: ${Object.entries(state)}`);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

export default App;
