import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <body>
        <main>
          <Header />
          <MovieLibrary movies={ movies } />
        </main>
      </body>
    );
  }
}

export default App;
