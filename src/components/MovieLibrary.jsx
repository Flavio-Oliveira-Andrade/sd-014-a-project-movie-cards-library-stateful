// implement MovieLibrary component here

import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovies({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    return movies
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(this.state) } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieLibrary;

// https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/7/commits/dc8022ac8769311c794d091387fed421e9e6abef
