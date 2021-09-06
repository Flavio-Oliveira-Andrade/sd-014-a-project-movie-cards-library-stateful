import React from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const searchText = '';
    const onSearchTextChange = (() => {});
    const bookmarkedOnly = false;
    const onBookmarkedChange = (() => {});
    const selectedGenre = '';
    const onSelectedGenreChange = (() => {});

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
