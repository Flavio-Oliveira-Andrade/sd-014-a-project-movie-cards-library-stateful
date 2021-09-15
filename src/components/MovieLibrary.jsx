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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick(movie) {
    this.setState(({ movies }) => ({
      movies: [...movies, movie],
    }));
  }

  moviesFilter = ({ searchText, bookmarkedOnly, selectedGenre, movies }) => movies
    .filter((movie) => (movie.title.includes(searchText))
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true))

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ this.moviesFilter(this.state) }
        />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};

MovieLibrary.defaultProps = {
  movies: '',
};

export default MovieLibrary;
