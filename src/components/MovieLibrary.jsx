import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    console.log(`App: ${Object.entries(state)}`);
    console.table(movies);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

export default MovieLibrary;
