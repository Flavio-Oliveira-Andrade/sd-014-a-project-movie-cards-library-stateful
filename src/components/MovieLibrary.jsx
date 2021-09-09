import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      bookmarkedOnly: false,
      movies: props.movies,
      searchText: '',
      selectedGenre: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  filterMovies() {
    const { bookmarkedOnly, movies, searchText, selectedGenre } = this.state;

    return movies
      .filter(({ bookmarked }) => (bookmarkedOnly ? bookmarked : true)) // If bookmarkedOnly is true, returns only bookmarked movies, if bookmarkedOnly is false, returns all movies
      .filter(({ genre }) => (selectedGenre.length !== 0 ? selectedGenre === genre : true)) // If selectedGenre is not empty, returns only movies with selected genre, if selectedGenre is empty, returns all movies
      .filter(({ title, subtitle, storyline }) => (title.includes(searchText) || subtitle.includes(searchText) || storyline.includes(searchText))); // Returns only movies with title, subtitle or storyline containing searchText
  }

  addMovie({ genre, imagePath, rating, storyline, subtitle, title }) {
    const { movies } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };

    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { addMovie, filterMovies, handleChange } = this;
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          onSearchTextChange={ handleChange }
          onSelectedGenreChange={ handleChange }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
