// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.saveState = this.saveState.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(movie) {
    const { movies } = this.state;
    console.log(movie);
    console.table(movies.length);
    movies.push(movie);
    this.saveState({
      movies,
    });
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    this.saveState({
      searchText: (target.value),
      movies: (target.value
        ? movies.filter(
          (movie) => movie.title.includes(target.value)
          || movie.subtitle.includes(target.value)
          || movie.storyline.includes(target.value),
        )
        : movies),
    });
  }

  onBookmarkedChange() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    this.saveState({
      bookmarkedOnly: (!bookmarkedOnly),
      movies: (!bookmarkedOnly)
        ? movies.filter((movie) => movie.bookmarked)
        : movies,
    });
    console.log(bookmarkedOnly);
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    this.saveState({
      selectedGenre: (target.value),
      movies: (target.value !== '')
        ? movies.filter((movie) => movie.genre === target.value)
        : movies,
    });
  }

  saveState(content) {
    this.setState(content);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
