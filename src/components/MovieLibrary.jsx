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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    this.setState({
      [name]: value,
      movies: movies.filter(({ title, subtitle, storyline }) => title.includes(value)
      || subtitle.includes(value) || storyline.includes(value)),
    });
  }

  handleBookmarked({ target }) {
    const { name, checked } = target;
    const { movies } = this.props;
    this.setState({
      [name]: checked,
      movies: checked ? movies.filter(({ bookmarked }) => bookmarked) : movies,
    });
  }

  handleGenre({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    this.setState({
      [name]: value,
      movies: movies.filter(({ genre }) => {
        if (value !== '') return genre === value;
        return true;
      }),
    });
  }

  handleClick(film) {
    this.setState((state) => ({
      movies: [...state.movies, { ...film, bookmarked: true }],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
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
