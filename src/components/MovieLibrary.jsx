import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange(event) {
    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  filter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    const filteredMovies = movies.filter((movie) => {
      const titleMatch = movie.title.includes(searchText);
      const subTitleMatch = movie.subtitle.includes(searchText);
      const storyMatch = movie.storyline.includes(searchText);
      return titleMatch || subTitleMatch || storyMatch;
    });
    if (bookmarkedOnly) {
      return filteredMovies.filter((movie) => movie.bookmarked);
    } if (selectedGenre) {
      return filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filter(this.state) } />
      </div>
    );
  }
}

export default MovieLibrary;
