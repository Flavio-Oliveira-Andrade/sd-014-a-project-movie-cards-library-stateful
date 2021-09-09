import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [name]: value });
  }

  handleClick(movie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie] }));
  }

  onSearchTextChange() {
    const { movies, searchText } = this.props;
    const arrayOfMovies = movies;

    movies.filter((movie) => movie.title.toLowerCase().includes(searchText)
    || movie.subtitle.toLowerCase().includes(searchText)
    || movie.storyline.toLowerCase().includes(searchText));
    return arrayOfMovies;
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    if (target.checked) {
      this.state({ movies: movies.filter((movie) => movie.bookmarked) });
    } else {
      this.setState({ movies });
    }
    this.handleChange({ target });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    if (target.value === '') {
      this.setState({ movies });
    } else {
      this.state({
        movies: movies.filter((movie) => movie.genre === target.value) });
    }
    this.handleChange({ target });
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>

    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired };

export default MovieLibrary;
