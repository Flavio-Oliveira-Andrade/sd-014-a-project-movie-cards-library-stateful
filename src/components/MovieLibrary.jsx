import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name, type, checked, value } = target;
    this.setState(
      {
        [name]: (type === 'checkbox' ? checked : value) },
    );
  }

  movieFilter({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    return movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    ).filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.movieFilter(this.state) } />
      </main>
    );
  }
}

export default MovieLibrary;
