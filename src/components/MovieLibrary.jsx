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
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  searchText = (event) => {
    console.log(event);
  }

  bookmarkedOnly = (event) => {
    console.log(event);
  }

  selectedGenre = (event) => {
    console.log(event);
  }

  addMovieF = (state) => {
    this.setState(({ movies }) => ({ movies: [...movies, state] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieF } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
