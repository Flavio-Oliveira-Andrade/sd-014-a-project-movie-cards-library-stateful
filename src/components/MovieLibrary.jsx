// implement MovieLibrary component here
import React from 'react';
/*  import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';  */

class MovieLibrary extends React.Component {
  /*  constructor() {
    super();

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  } */

  render() {
    /*  const { searchText: s, bookmarkedOnly: b, selectedGenre: g, movies: m } = this.state; */
    return (
      /*  <>
        <SearchBar searchText={ s } bookmarkedOnly={ b } selectedGenre={ g } />
        <MovieList movies={ m } />
      </> */
      <p>Olá</p>
    );
  }
}

/*  MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};  */

export default MovieLibrary;
