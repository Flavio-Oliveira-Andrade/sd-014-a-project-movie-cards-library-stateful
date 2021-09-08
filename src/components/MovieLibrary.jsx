import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: {movies},
    };
  }
  
  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }
  
  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    // console.log({movies})
    return (
      <div>

        <SearchBar
          searchText={ searchText }
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies}/>

        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

