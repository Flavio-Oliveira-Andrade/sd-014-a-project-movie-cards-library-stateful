import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      movies,
    };
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie(movie) {
    const { movies } = this.state;
    const newMovie = movie;
    newMovie.rating = parseFloat(movie.rating);
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { movies } = this.state;
    return (
      <section>
        <SearchBar />
        <AddMovie onClick={ this.addNewMovie } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
