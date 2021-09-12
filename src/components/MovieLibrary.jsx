// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => (
      movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)
    ));
    this.setState({
      searchText: value,
      movies: filteredMovies,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.props;
    const filteredMovies = checked
      ? movies.filter((movie) => (movie.bookmarked === checked)) : movies;
    this.setState({
      bookmarkedOnly: checked,
      movies: filteredMovies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => movie.genre === value);
    this.setState({
      selectedGenre: value,
      movies: value === '' ? movies : filteredMovies,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookMarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
