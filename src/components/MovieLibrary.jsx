// implement MovieLibrary component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.searchText = this.searchText.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
    this.searchText(event);
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    const { checked } = event.target;
    const listMovies = !checked
      ? movies : movies.filter((movie) => movie.bookmarked === true);
    this.setState({
      movies: listMovies,
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    const { selectedIndex } = event.target.options;
    const { value } = event.target.options[selectedIndex];
    const listMovies = (value === '')
      ? movies : movies.filter((movie) => movie.genre === value);
    this.setState({
      selectedGenre: value,
      movies: listMovies,
    });
  }

  searchText(event) {
    const { movies } = this.props;
    const { value } = event.target;
    const listMovies = (!value) ? movies
      : movies.filter((mov) => ((mov.title.toUpperCase()).includes(value.toUpperCase())
        || (mov.subtitle.toUpperCase()).includes(value.toUpperCase())
        || (mov.storyline.toUpperCase()).includes(value.toUpperCase())));
    this.setState({
      movies: listMovies,
    });
  }

  addMovie(list) {
    const { movies } = this.props;
    movies.push(list);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
