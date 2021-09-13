import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: this.movies,
  //   };
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar searchText={ searchText } />
        <AddMovie { ...movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
