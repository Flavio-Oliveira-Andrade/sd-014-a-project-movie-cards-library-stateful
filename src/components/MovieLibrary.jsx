import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    }
  }
  render() {

    const {movies} = this.props;

    return (
      <>
        <SearchBar searchText={''}/>
        <MovieList movies={movies}/>
        <AddMovie />
        {console.log(this.props)}
      </>
    );
  }
}

export default MovieLibrary;