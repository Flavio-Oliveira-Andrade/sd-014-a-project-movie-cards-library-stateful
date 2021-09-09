// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    const estadoInicial = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.state = estadoInicial;
    this.filtroFilmes = this.filtroFilmes.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  filtroFilmes = (searchText, bookmarkedOnly, selectedGenre, movies) => {
    let arr = movies;
    if (searchText !== '') {
      arr = arr.filter((movie) => (
        (movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      ));
    }
    if (bookmarkedOnly !== false) {
      arr = arr.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      arr = arr.filter((movie) => movie.genre === selectedGenre);
    }
    return arr;
  }

  addMovie({ subtitle, title, imagePath, storyline, rating, genre }) {
    const { movies } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    };
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ this.filtroFilmes(
            searchText, bookmarkedOnly, selectedGenre, movies,
          ) }
        />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
