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
    this.clicked = this.clicked.bind(this);
    this.searching = this.searching.bind(this);
  }

  clicked(e) {
    e.preventDefault();
    console.log(this.state);
  }

  searching(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    const { searchText } = this.state;
    const { movies } = this.props;
    const movie = movies.filter((cur) => cur.title.includes(searchText) === true);
    return (
      <>
        <SearchBar searchText={ searchText } onSearchTextChange={ this.searching } bookmarkedOnly={ false } onBookmarkedChange="" selectedGenre="" onSelectedGenreChange="" />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.clicked } />
        {console.log(this.props)}
      </>
    );
  }
}

export default MovieLibrary;
