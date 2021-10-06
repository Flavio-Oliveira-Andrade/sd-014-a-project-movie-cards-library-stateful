// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filter: movies,
      movies,
    };
    this.getBookmarkedMovies = this.getBookmarkedMovies.bind(this);
    this.getMovieByGenre = this.getMovieByGenre.bind(this);
    this.filterText = this.filterText.bind(this);
  }

  handleClick = (newMovie) => {
    const { filter, movies } = this.state;
    this.setState({ filter: [...filter, newMovie], movies: [...movies, newMovie] });
  };

  getBookmarkedMovies() {
    const { movies, bookmarkedOnly } = this.state;
    const bookMarked = movies
      .filter(({ bookmarked }) => (bookmarkedOnly ? bookmarked : true));
    console.log(bookMarked);
    return bookMarked;
  }

  getMovieByGenre(array) {
    const { selectedGenre } = this.state;
    return array.filter(({ genre }) => genre.includes(selectedGenre));
  }

  handleChange = (event) => {
    const { movies } = this.state;
    const { name, value, checked, type } = event.target;
    let filter = movies;
    this.setState({ [name]: type === 'checkbox' ? checked : value }, () => {
      if (name === 'searchText') {
        filter = this.filterText(filter);
      }
      if (name === 'bookmarkedOnly') {
        filter = this.getBookmarkedMovies(filter);
      }
      if (name === 'selectedGenre') {
        filter = this.getMovieByGenre(filter);
      }
      this.setState({ filter });
    });
  };

  filterText() {
    const { searchText, movies } = this.state;
    const filterMovies = movies
      .filter(({ title, subtitle, storyline }) => (title.includes(searchText)
      || subtitle.includes(searchText) || storyline.includes(searchText)));
    return filterMovies;
  }

  render() {
    // const { filterText, getBookmarkedMovies, getMovieByGenre } = this;
    const { searchText, bookmarkedOnly, selectedGenre, filter } = this.state;
    // const filter = getMovieByGenre(getBookmarkedMovies(filterText(this.state)));
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
        <MovieList movies={ filter } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
