import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MoviesList from './MovieList';
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
    this.handleFilter = this.handleFilter.bind(this);
    this.handleAditionalMovie = this.handleAditionalMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFilter({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    return movies.filter((movie) => movie.title.includes(searchText)
      || movie.storyline.includes(searchText)
      || movie.subtitle.includes(searchText))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true));
  }

  handleAditionalMovie(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  handleChange = ({ target }) => this.setState({
    [target.name]: (target.type === 'checkbox' ? target.checked : target.value),
  });

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
        <MoviesList movies={ this.handleFilter(this.state) } />
        <AddMovie onClick={ this.handleAditionalMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default MovieLibrary;
