// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);

    // Guarda array passado através de props
    const { movies } = this.props;

    // Estado inicial do componente
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // Controla a chave searchText do componente
  onSearchTextChange({ target }) {
    const { movies } = this.props;

    const filteredMovies = movies.filter((movie) => movie.title.includes(target.value)
        || movie.subtitle.includes(target.value)
        || movie.storyline.includes(target.value));

    this.setState({
      searchText: target.value,
      movies: target.value === ''
        ? movies
        : filteredMovies,
    });
  }

  // Controla a chave bookmarkedOnly do componente
  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    this.setState({
      bookmarkedOnly: target.checked,
      movies: target.checked
        ? movies.filter((movie) => movie.bookmarked)
        : movies,
    });
  }

  // Controla a chave selectedGenre do componente
  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    this.setState({
      selectedGenre: target.value,
      movies: target.value === ''
        ? movies
        : movies.filter((movie) => movie.genre === target.value),
    });
  }

  // Adiciona card quando o botao do formulario AddMovie é clicado
  onClickAddMovie(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2>My Awesome Movie Library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClickAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
