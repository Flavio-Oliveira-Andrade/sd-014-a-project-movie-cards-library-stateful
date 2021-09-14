import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  // constructor(props) {
  //  super(props);
  // }

  render() {
    // const { searchText } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar /* searchText={ searchText } */ />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */ }
      </div>
    );
  }
}

export default MovieLibrary;
