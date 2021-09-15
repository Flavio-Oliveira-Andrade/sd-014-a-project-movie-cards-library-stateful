import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
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
