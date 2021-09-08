import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props; // recebe props;
    this.state = { searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
