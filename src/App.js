import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        id="search-bar"
        searchText=""
        onSearchTextChange={ () => {} }
        bookmarkedOnly={ false }
        onBookmarkedChange={ () => {} }
        selectedGenre="string"
        onSelectedGenreChange={ () => {} }
      />
    </div>
  );
}

export default App;
