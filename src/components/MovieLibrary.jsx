import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import allMovies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: allMovies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  onSearchTextChange({ target }) {
    // this.setState((state) => ({ ...state, searchText: target.value}));
    this.setState({ searchText: target.value });
  }

  render() {
    const { state: { searchText, bookmarkedOnly, selectedGenre, movies } } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onHandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onHandleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onHandleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
