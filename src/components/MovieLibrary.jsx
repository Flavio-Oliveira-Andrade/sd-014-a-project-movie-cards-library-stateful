// implement MovieLibrary component here.
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const newArray = movies.filter((movie) => movie.title.includes(target.value)
     || movie.subtitle.includes(target.value)
     || movie.storyline.includes(target.value));

    this.setState({
      searchText: target.value,
      movies: newArray,
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const newArray = movies.filter((movie) => movie.bookmarked === true);

    if (target.checked) {
      this.setState({
        bookmarkedOnly: target.checked,
        movies: newArray,
      });
    } else {
      this.setState({
        bookmarkedOnly: target.checked,
        movies,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const newArray = target.value === '' ? movies : movies.filter(
      (movie) => movie.genre === target.value,
    );

    this.setState({
      selectedGenre: target.value,
      movies: newArray,
    });
  }

  onClick(newMovie) {
    let { movies } = this.props;
    movies = [...movies, newMovie];
    this.setState({ movies });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
