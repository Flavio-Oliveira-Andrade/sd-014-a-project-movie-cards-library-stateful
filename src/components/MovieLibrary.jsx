import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
  }

  handleSearch({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      movies: movies.filter(({ title, subtitle, storyline }) => title.includes(value)
      || subtitle.includes(value) || storyline.includes(value)),
    });
  }

  handleBookmarked({ target }) {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
      movies: movies.filter(({ bookmarked }) => bookmarked),
    });
  }

  handleGenre({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      movies: movies.filter(({ genre }) => genre === value),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
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
