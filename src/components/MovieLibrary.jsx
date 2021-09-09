// implement MovieLibrary component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(list) {
    const { movies } = this.props;
    movies.push(list);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// MovieLibrary.defaultProps = {
//   searchText: '',
//   bookmarkedOnly: false,
//   selectedGenre: '',
//   movies: [{}],
// };

export default MovieLibrary;
