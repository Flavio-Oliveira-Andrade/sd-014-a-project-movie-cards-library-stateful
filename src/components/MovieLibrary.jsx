// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies: mv } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: mv,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  searchGeneric(valueSearch, movie) {
    if (movie.title.includes(valueSearch)) {
      return movie;
    } if (movie.subtitle.includes(valueSearch)) {
      return movie;
    } if (movie.storyline.includes(valueSearch)) {
      return movie;
    }
    return '';
  }

  filterMovies(arrayMovies, search) {
    const { searchText, bookmarkedOnly, selectedGenre } = search;
    return arrayMovies
      .filter((movie) => (bookmarkedOnly === true ? movie.bookmarked : movie))
      .filter((movie) => (selectedGenre === ''
        ? movie : selectedGenre === movie.genre))
      .filter((movie) => this.searchGeneric(searchText, movie));
  }
  // addMovie(newMovie){
  // const { subtitle, title, imagePath, storyline, rating, genre } = newMovie;
  // movies.push(newMovie);
  // }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(movies, this.state) } />
        <AddMovie addMovie={ this.addMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
