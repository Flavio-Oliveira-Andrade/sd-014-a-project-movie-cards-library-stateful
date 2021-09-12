import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onCLick = () => {
    // event.preventDefault();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList
          movies={
            movies
              .filter((movie) => movie.title.includes(searchText)
              || movie.subtitle.includes(searchText)
              || movie.storyline.includes(searchText))
              .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
              .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true))
              // .map(())
          }
        />
        <AddMovie onClick={ this.onCLick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default MovieLibrary;
