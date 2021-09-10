// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

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
  }

    applyFilter = () => {
      const { searchText, bookmarkedOnly, selectedGenre } = this.state;
      const { movies } = this.props;
      const filteredMovies = movies
        .filter(
          (movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
          || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
          || movie.storyline.toUpperCase().includes(searchText.toUpperCase()),
        )
        .filter(
          (movie) => bookmarkedOnly === false || movie.bookmarked === bookmarkedOnly,
        )
        .filter((movie) => selectedGenre === '' || movie.genre === selectedGenre);
      this.setState({ movies: filteredMovies });
    };

  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value }, this.applyFilter);
  };

  onBookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked }, this.applyFilter);
  };

  onSelectedGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value }, this.applyFilter);
  };

  addMovie = (newMovie) => {
    const { movies } = this.props;
    this.setState({ movies: [...movies, newMovie] });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
