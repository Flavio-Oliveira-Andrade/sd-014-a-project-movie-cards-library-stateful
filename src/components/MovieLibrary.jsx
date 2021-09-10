import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
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

  filterBookmark = ((array) => {
    const { bookmarkedOnly } = this.state;
    return array.filter(({ bookmarked }) => (bookmarkedOnly ? bookmarked : true));
  })

  filterGenreSelection = ((array) => {
    const { selectedGenre } = this.state;
    return array.filter(({ genre }) => genre.includes(selectedGenre));
  })

  render() {
    const { filterText, filterBookmark, filterGenreSelection } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filter = filterGenreSelection(filterBookmark(filterText(this.state)));
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
