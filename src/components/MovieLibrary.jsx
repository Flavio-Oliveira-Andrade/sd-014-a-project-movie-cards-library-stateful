import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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

  fillFilm = ({ searchText, movies, bookmarkedOnly, selectedGenre }) => {
    let fillFilm = movies;

    if (bookmarkedOnly) {
      fillFilm = movies.filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.title.toLowerCase()
          .includes(searchText.toLowerCase()));
      return fillFilm;
    }
    if (selectedGenre !== '') {
      fillFilm = movies.filter((movie) => movie.genre === selectedGenre)
        .filter((movie) => movie.title.toLowerCase()
          .includes(searchText.toLowerCase()));
      return fillFilm;
    }

    fillFilm = movies.filter((movie) => movie
      .title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));

    return fillFilm;
  }

  handleChange = ({ target }) => {
    const { name, type, value } = target;
    const newValue = type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: newValue });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.fillFilm(this.state) } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
