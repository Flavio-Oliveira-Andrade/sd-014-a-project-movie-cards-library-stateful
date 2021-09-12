import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.props;

    const filterBySearch = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));

    const filterByGenre = filterBySearch.filter((movie) => movie.genre === selectedGenre
    || selectedGenre === '');

    const filterByBookmarked = filterByGenre.filter((movie) => movie.bookmarked === true);

    if (bookmarkedOnly) {
      return (
        <div data-testid="movie-list" className="movie-list">
          { filterByBookmarked
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      );
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        { filterByGenre
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = ({
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ) }).isRequired;

export default MovieList;
