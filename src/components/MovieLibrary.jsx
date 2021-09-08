import React from "react";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie"

class MovieLibrary extends React.Component {
  constructor () {
    super();
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar movies={ movies } />
        <AddMovie movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;
