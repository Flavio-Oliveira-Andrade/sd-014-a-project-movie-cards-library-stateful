import React from 'react';
import PropTypes from 'prop-types';

import { SearchBar } from './SearchBar';
import MovieList from './MovieList';
import { AddMovie } from './AddMovie';

export class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',

  //   };
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({

  }).isRequired,
};

export default MovieLibrary;
