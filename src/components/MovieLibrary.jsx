import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = { searchText: '', bookmarkedOnly: false, selectedGenre: '', movies };
  }

  loadElement = ({ target }) => {
    const { name, value, checked, type } = target;

    this.setState({ [name]: (type === 'checkbox' ? checked : value) });
  };

  addMovie = (movie) => {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  };

  moviesControl = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const searchTextUp = searchText.toUpperCase();
    return movies
      .filter((movie) => (movie.title.toUpperCase().includes((searchTextUp))
        || movie.subtitle.toUpperCase().includes(searchTextUp)
        || movie.storyline.toUpperCase().includes(searchTextUp)))
      .filter((movie) => (!bookmarkedOnly ? true : movie.bookmarked))
      .filter((movie) => (!selectedGenre ? true : movie.genre === selectedGenre));
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.loadElement }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.loadElement }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.loadElement }
        />
        <AddMovie onClick={ this.addMovie } />
        <MovieList movies={ this.moviesControl() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
