import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import movies from '../data';

const addState = () => ({
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
});

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  onCLick = () => {
    this.setState({ ...addState() });
  }

  handleTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onCLick } />
      </div>
    );
  }
}

export default MovieLibrary;
