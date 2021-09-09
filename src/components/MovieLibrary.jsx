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

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.loadElement }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.loadElement }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.loadElement }
      />

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
