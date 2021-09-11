import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      randomIndex: '',
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.randonClick = this.randonClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    // const { movies, searchText } = this.state;
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  randonClick() {
    const { movies } = this.state;
    const maxIndex = (movies.length) - 1;
    const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
    this.setState({ randomIndex: [randomIndex] });

    console.log(`max index ${maxIndex}`);
    console.log(`Random index ${randomIndex}`);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies, randomIndex } = this.state;
    const filterMovies = movies
      .filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ))
      .filter(({ bookmarked }) => (bookmarkedOnly ? bookmarked : true))
      .filter(({ genre }) => ((selectedGenre !== '') ? (genre === selectedGenre) : true))
      .filter((_, index) => ((randomIndex !== '') ? (index === randomIndex[0]) : true));
      // .filter((_, index) => ((randomIndex !== '') && (index === randomIndex)));
      // .find(({ index }) => ((randomIndex !== '') ? (index === randomIndex) : true));
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          randonClick={ this.randonClick }
        />
        <MovieList movies={ filterMovies } onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
