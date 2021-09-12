import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      brookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({ [name]: value });
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const dados = `${title}, ${subtitle}, ${storyline}`;
          return dados.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({ movies: movies.filter((movie) => movie.bookmarked) });
    } else {
      this.setState({ movies });
    }
    this.handleChange(event);
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    if (event.target.value === '') {
      this.setState({ movies });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === event.target.value),
      });
    }
    this.handleChange(event);
  }

  addNewMovie(movie) {
    this.setState(({ movies }) => ({ movies: [...movies, movie] }));
  }

  render() {
    const { searchText, brookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          brookmarkedOnly={brookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <AddMovie onClick={this.addNewMovie} />
        <MovieList movies={movies} />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  brookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
