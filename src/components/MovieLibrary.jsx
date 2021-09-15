import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);

    return (
      <section>
        <SearchBar />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
