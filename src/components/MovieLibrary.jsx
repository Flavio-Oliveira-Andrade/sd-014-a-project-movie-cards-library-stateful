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
    };
    this.clicked = this.clicked.bind(this)
  }

  clicked(e){
    e.preventDefault()
    console.log(this.state)
    
  }

  render() {
    const { movies } = this.props;

    return (
      <>
        <SearchBar searchText="" />
        <MovieList movies={ movies } />
        <AddMovie onClick={this.clicked}/>
        {console.log(this.props)}
      </>
    );
  }
}

export default MovieLibrary;
