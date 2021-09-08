import React from "react";

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange() {

  }

  render() {
    const { searchText } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={ searchText } onSearchTextChange={ this.onSearchTextChange } />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
