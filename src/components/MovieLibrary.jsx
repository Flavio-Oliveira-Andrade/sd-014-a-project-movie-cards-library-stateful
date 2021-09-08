import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.filteredByName = this.filteredByName.bind(this);
    this.filteredByGenre = this.filteredByGenre.bind(this);
    this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filteredByName({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filtered = movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value));
    this.setState({
      searchText: value,
      movies: !value ? movies : filtered,
    });
  }

  filteredByGenre({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filtered = movies.filter((movie) => movie.genre === value);
    this.setState({
      selectedGenre: value,
      movies: !value ? movies : filtered,
    });
  }

  bookmarkedOnly({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filtered = movies.filter((movie) => movie.bookmarked);
    this.setState({
      bookmarkedOnly: value,
      movies: !value ? movies : filtered,
    });
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filteredByName }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.filteredByGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
