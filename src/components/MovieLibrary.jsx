import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  filters = (movies) => {
    const filteredByText = this.filterByText(movies);
    const filteredByBookmarked = this.filterByBookmark(filteredByText);
    const filtered = this.filterByGenre(filteredByBookmarked);
    return filtered;
  }

  filterByBookmark(movies) {
    const { state: { bookmarkedOnly } } = this;
    return movies.filter((movie) => (
      bookmarkedOnly ? movie.bookmarked : true
    ));
  }

  filterByGenre(movies) {
    const { state: { selectedGenre } } = this;
    return movies.filter((movie) => (
      selectedGenre ? movie.genre === selectedGenre : true
    ));
  }

  filterByText(movies) {
    const { state: { searchText } } = this;
    return movies.filter((movie) => (
      movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
    ));
  }

  render() {
    const { state: { searchText, bookmarkedOnly, selectedGenre, movies } } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onHandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onHandleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onHandleChange }
        />
        <MovieList movies={ this.filters(movies) } />
        <AddMovie />
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
