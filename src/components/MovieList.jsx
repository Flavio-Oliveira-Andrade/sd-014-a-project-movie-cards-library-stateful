import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <SearchBar
        // searchText= {string}
        // onSearchTextChange= {string}
        // bookmarkedOnly= {string}
        // onBookmarkedChange= {string}
        // selectedGenre= {string}
        // onSelectedGenreChange= {string}
        />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
