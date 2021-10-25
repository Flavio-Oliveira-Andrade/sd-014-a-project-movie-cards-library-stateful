import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onClick(info) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, info] });
  }

  filterMovies(moviesToFilter) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (searchText !== '') {
      moviesToFilter = moviesToFilter.filter((mov) => mov.title.includes(searchText)
      || mov.subtitle.includes(searchText)
      || mov.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      moviesToFilter = moviesToFilter.filter((mov) => mov.bookmarked);
    }
    if (selectedGenre !== '') {
      moviesToFilter = moviesToFilter.filter((mov) => mov.genre === selectedGenre);
    }
    return moviesToFilter;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.state;
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
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
