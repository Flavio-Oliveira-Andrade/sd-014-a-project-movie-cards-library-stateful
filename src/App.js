import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import movies from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookMarkedOnly: true,
      selectedGenre: '',
    };
  }

  onSearchTextChange() {
    console.log('searchTextchange');
  }

  onBookmarkedChange() {
    console.log('bookmarkedchange');
  }

  onSelectedGenreChange() {
    console.log('onselectedgenrechange');
  }

  render() {
    const { searchText, bookMarkedOnly, selectedGenre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookMarkedOnly={ bookMarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
