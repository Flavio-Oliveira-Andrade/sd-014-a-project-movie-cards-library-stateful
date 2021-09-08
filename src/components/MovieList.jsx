import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        <SearchBar
          searchText=""
          onSearchTextChange={ onSearchTextChange }
          bookmarkedChange={ false }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre=""
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>

      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
