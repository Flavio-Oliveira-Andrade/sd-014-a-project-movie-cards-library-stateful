import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      searchText: PropTypes.string,
      bookmarkedOnly: PropTypes.bool,
      stoselectedGenreryline: PropTypes.string,
      movies: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieLibrary;
