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
  }

  handleChange = (event) => {
    let value = '';
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    this.setState({ [event.target.name]: value });
  }

  onSearchTextChange = (event) => {
    const { movies } = this.props;
    if (event.target.value !== '') {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => {
          const filterBy = `${title}, ${subtitle}, ${storyline}`;
          return filterBy.includes(event.target.value);
        }),
      });
    }
    this.handleChange(event);
  }

  onBookmarkedChange = (event) => {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({
        movies: movies.filter(({ bookmarked }) => bookmarked),
      });
    }
    this.handleChange(event);
  }

  onSelectedGenreChange = (event) => {
    const { movies } = this.props;
    if (event.target.value !== '') {
      this.setState({
        movies: movies.filter(({ genre }) => genre === event.target.value),
      });
    }
    this.handleChange(event);
  }

  addMovieF = (state) => {
    this.setState(({ movies }) => ({ movies: [...movies, state] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieF } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
