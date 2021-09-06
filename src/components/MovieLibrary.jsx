import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name, type, checked, value } = target;
    this.setState(
      {
        [name]: (type === 'checkbox' ? checked : value) },
    );
  }

  handleClick(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  // Filtro retirado do PR do Marcello, T14A
  movieFilter({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    return movies.filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true))
      .filter((movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.movieFilter(this.state) } />
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
