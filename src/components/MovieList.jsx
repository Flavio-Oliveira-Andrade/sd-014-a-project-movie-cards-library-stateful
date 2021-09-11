import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddMovie from './AddMovie';

class MovieList extends React.Component {
  render() {
    const { movies, onClick } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieList;
