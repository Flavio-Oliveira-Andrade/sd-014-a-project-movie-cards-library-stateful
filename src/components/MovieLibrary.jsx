import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.initialState = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };

    this.state = this.initialState;

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);

    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);

    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);

    this.handleFilterMoviesChanges = this.handleFilterMoviesChanges.bind(this);
  }

  handleSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  handleFilterMoviesChanges() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    let filtered = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));

    if (bookmarkedOnly) {
      filtered = filtered.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      filtered = filtered.filter((movie) => movie.genre.includes(selectedGenre));
    }
    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList
          movies={ this.handleFilterMoviesChanges() }
        />
      </div>
    );
  }
}

export default MovieLibrary;
