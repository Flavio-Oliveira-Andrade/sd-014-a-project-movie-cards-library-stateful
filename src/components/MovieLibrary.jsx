// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.renderNewMovie = this.renderNewMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    const value = bookmarkedOnly;
    this.setState({ bookmarkedOnly: !value });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filteredMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies
        .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      filteredMovies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovies;
  }

  // Retirei deste site a ideia de como passar data do componente filho para o componente pai https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/

  renderNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookMarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filteredMovies(movies) } />
        <AddMovie onClick={ this.renderNewMovie } />
      </div>

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
