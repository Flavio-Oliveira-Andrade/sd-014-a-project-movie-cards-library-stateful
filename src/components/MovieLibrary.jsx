// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.handleChange = this.handleChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleNewMovie(newMovie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, { ...newMovie, bookmarked: true }],
    }));
  }

  moviesFilter(moviesParam) { // Based on pull of Yasmin Souza
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesArray = [...moviesParam];

    if (searchText) {
      moviesArray = moviesParam.filter((movie) => movie.title
        .toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLocaleLowerCase()));
    }

    if (selectedGenre) {
      moviesArray = moviesParam.filter((genre) => genre.genre.includes(selectedGenre));
    }

    if (bookmarkedOnly) {
      moviesArray = moviesParam.filter((favoriteMovie) => favoriteMovie.bookmarked
      === true);
    }
    return moviesArray;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList
          movies={ this.moviesFilter(movies) }
        />
        <AddMovie onClick={ this.handleNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape.isRequired,
};

export default MovieLibrary;
