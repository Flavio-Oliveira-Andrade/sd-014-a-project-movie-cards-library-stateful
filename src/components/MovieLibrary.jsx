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
  }

  handleChange = ({ target }) => {
    const { name } = target;

    this.setState({
      [name]: (target.type === 'checkbox' ? target.checked : target.value),
    });
  }

  handleClick = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  filteredMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    console.log(selectedGenre);
    return movies
      .filter((movie) => (movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText)))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));
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
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
