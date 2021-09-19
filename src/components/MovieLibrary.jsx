import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.eventHandler = this.eventHandler.bind(this);
    this.filter = this.filter.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  eventHandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  clickHandler(event) {
    this.setState(({ movies }) => ({
      movies: [...movies, event],
    }));
  }

  filter({ movies, searchText, bookmarkedOnly, selectedGenre }) {
    const movieFilter = movies.filter((movie) => {
      const title = movie.title.includes(searchText);
      const subtitle = movie.subtitle.includes(searchText);
      const storyline = movie.storyline.includes(searchText);
      return title || subtitle || storyline;
    });

    if (selectedGenre) {
      return movieFilter.filter((movie) => movie.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movieFilter.filter((movie) => movie.bookmarked);
    }
    return movieFilter;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.eventHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.eventHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.eventHandler }
        />
        <MovieList movies={ this.filter(this.state) } />
        <AddMovie onClick={ this.clickHandler } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      searchText: PropTypes.string,
      bookmarkedOnly: PropTypes.bool,
      stoselectedGenreryline: PropTypes.string,
      movies: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieLibrary;
