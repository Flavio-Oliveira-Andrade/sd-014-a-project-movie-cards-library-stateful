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
    this.handleNewMovie = this.handleNewMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleNewMovie(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  moviesFilter = () => {
    // const { searchText, bookmarkedOnly, selectedGenre, movies, arrayMovies } = this.state;
    // let array = movies;
    // if (searchText !== '') {
    //   array = array.filter((movie) => (
    //     (movie.title.toLowerCase().includes(searchText.toLowerCase())
    //     || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
    //     || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
    //   ));
    // }
    // if (bookmarkedOnly !== false) {
    //   array = array.filter((movie) => movie.bookmarked);
    // }
    // if (selectedGenre !== '') {
    //   array = array.filter((movie) => movie.genre === selectedGenre);
    // }
    // this.setState(arrayMovies, () => ({
    //   arrayMovies: array,
    // }));
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
          movies={ movies }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape.isRequired,
};

export default MovieLibrary;
