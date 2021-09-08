import React from "react";

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarked: false,
      selectedGenre: "",
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange() {}

  onBookmarkedChange() {}

  onSelectedGenreChange() {}

  render() {
    const { searchText, bookmarked, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarked={bookmarked}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
