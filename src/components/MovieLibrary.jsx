import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.bookmarkedFilter = this.bookmarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
  }

  handleChange({ target }) {
    if (target.type === 'checkbox') {
      this.setState({ [target.name]: target.checked });
      return;
    }
    this.setState({ [target.name]: target.value });
  }

  bookmarkedFilter(movie) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return movie.bookmarked;
    }
    return true;
  }

  genreFilter(movie) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return movie.genre === selectedGenre;
    }
    return true;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const movieBookmark = movies.filter((movie) => {
      if (this.bookmarkedFilter(movie) && this.genreFilter(movie)) {
        return movie.title.toLowerCase().includes(searchText.toLocaleLowerCase());
      }
      return false;
    });
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movieBookmark } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
