import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

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
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    return this.setState({
      [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  filterMovies({ searchText, bookmarkedOnly, movies, selectedGenre }) {
    const filteredMovies = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );
    if (bookmarkedOnly) {
      return filteredMovies.filter((movie) => movie.bookmarked);
    } if (selectedGenre) {
      return filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(this.state) } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
