import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleSearchText(texto) {
    movies.filter(({ title, subtitle, storyline }) => title.includes(texto)
    || subtitle.includes(texto)
    || storyline.includes(texto))
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText } = this.state;
    const { onSearchTextChange } = this;
    return (
      <div>
        <SearchBar onSearchTextChange={ onSearchTextChange } searchText={ searchText } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
