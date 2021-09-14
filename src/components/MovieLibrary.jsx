import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchtext: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
  }

//Tirei a ideia de um code review

  handleSearchText({ target }) {
    this.setState({
      searchtext: target.value,
    });
  }

  handleBook({ target }) {
    this.setState({
      bookmarkedOnly: target.value,
    });
  }

  handleGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  handleMovie(AdMovie) {
    this.setState((prevState) => {
      const movieList = [...prevState.movies];
      movieList.push({ ...AdMovie });
      return { movies: movieList };
    });
  }

  filterMovies() {
    const { searchtext, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchtext !== '') {
      return movies.filter((movie) => (movie.title.includes(searchtext)
        || movie.subtitle.includes(searchtext)
        || movie.storyline.includes(searchtext)
      ));
    }
    return movies;
  }

  render() {
    const { searchtext, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchtext={ searchtext }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSearchText }
          onBookmarkedChange={ this.handleBook }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.handleMovie } />
      </div>

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
