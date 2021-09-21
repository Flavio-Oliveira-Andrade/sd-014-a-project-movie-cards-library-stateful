import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  // falta terminar aqui.

  onSearchTextChange(event) {
    const { movies } = this.props;
    this.setState({
      searchText: event.target.value,
      movies: event.target.checked === true ? this.filterFavorites(movies) : movies,
    });
  }

  onClick(newmovie) {
    this.setState((state) => {
      const arr = [...state.movies, newmovie];
      return { movies: arr };
    });
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    this.setState({
      bookmarkedOnly: event.target.checked,
      movies: event.target.checked === true ? this.filterFavorites(movies) : movies,
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    this.setState({
      selectedGenre: event.target.value,
      movies: this.filterGenre(movies, event.target.value),
    });
  }

  filterText(movies, text) {
    const filterByText = movies.filter(((movie) => movie.title.includes(text)));
    return filterByText;
  }

  filterGenre(movies, genre) {
    const filterMovies = movies.filter(((movie) => movie.genre === genre));
    return filterMovies;
  }

  filterFavorites(movies) {
    const filterMovies = movies.filter(((movie) => movie.bookmarked === true));
    return filterMovies;
  }

  render() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }

        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
