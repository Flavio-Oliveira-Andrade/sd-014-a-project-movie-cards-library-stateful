// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selected: '',
      movies,
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleClick = (newMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  };

  filterText = ({ searchText, movies }) => movies
    .filter(({ title, subtitle, storyline }) => (title.includes(searchText)
    || subtitle.includes(searchText) || storyline.includes(searchText)));

  getBookmarkedMovies = ((array) => {
    const { bookmarkedOnly } = this.state;
    return array.filter(({ bookmarked }) => (bookmarkedOnly ? bookmarked : true));
  })

  getMovieByGenre = ((array) => {
    const { selectedGenre } = this.state;
    return array.filter(({ genre }) => genre.includes(selectedGenre));
  })

  render() {
    const { filterText, getBookmarkedMovies, getMovieByGenre } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterFunctions = getMovieByGenre(getBookmarkedMovies(filterText(this.state)));
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
        <MovieList movies={ filterFunctions } />
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
