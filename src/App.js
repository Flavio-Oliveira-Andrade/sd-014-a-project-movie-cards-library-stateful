import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import movies from './data';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: true,
      selectedGenre: '',
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    const value = bookmarkedOnly;
    this.setState({ bookmarkedOnly: !value });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookMarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default App;
